import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Vibration, Modal, ScrollView } from 'react-native'
import { Video, Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import topBg from '../assets/images/topDesign.png'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { colorsArray } from '../utils/colors'
import { quizComplete } from '../actions/Quiz/Quiz';
import PointsIcon from '../assets/icons/pointsIcon.png'
import LevelIcon from '../assets/icons/levelIcon.png'
import ExperienceIcon from '../assets/icons/experienceIcon.png'
import SmallFriendList from '../components/SmallFriendList'
Audio.setAudioModeAsync(true)
class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuizDoneModal: false,
      videoPlay: true,
      audioPlay: true,
      totalTime: 0,
      timer: '',
      time: 0,
      underlayColor: '#FFF',
      activeUserScore: 0,
      challengedUserScore: 0,
      currentQuestion: 0,
      answerSelected: null,
      quizStats: {},
      quizRes: [],
      quizAnswers: {},
      questions: [
        {
          id: '1',
          type: 'image',
          text: 'Who is this?',
          url: 'https://www.cricbuzz.com/a/img/v1/650x0/i1/c180872/virat-kohli-won-the-toss-and.jpg',
          options: [
            {
              id: '1',
              text: 'Me'
            },
            {
              id: '2',
              text: 'Myself'
            },
            {
              id: '3',
              text: 'MSD'
            },
            {
              id: '4',
              text: 'Tera Bap'
            }
          ],
          correctAnswerId: 4
        },
        {
          id: '2',
          type: 'image',
          text: 'What is this?',
          url: 'https://www.cricbuzz.com/a/img/v1/650x0/i1/c181288/indias-bowlers-were-part-of-e.jpg',
          options: [
            {
              id: '1',
              text: 'Me'
            },
            {
              id: '2',
              text: 'Myself'
            },
            {
              id: '3',
              text: 'MSD'
            },
            {
              id: '4',
              text: 'Tera Bap'
            }
          ],
          correctAnswerId: 4
        },
        {
          id: '3',
          type: 'image',
          text: 'Who is this?',
          url: 'https://www.cricbuzz.com/a/img/v1/650x0/i1/c181289/ashwin-got-a-7-wicket-haul-for.jpg',
          options: [
            {
              id: '1',
              text: 'Me'
            },
            {
              id: '2',
              text: 'Myself'
            },
            {
              id: '3',
              text: 'MSD'
            },
            {
              id: '4',
              text: 'Tera Bap'
            }
          ],
          correctAnswerId: 4
        },
        {
          id: '4',
          type: 'image',
          text: 'Who is this?',
          url: 'https://www.cricbuzz.com/a/img/v1/650x0/i1/c181290/muthusami-steps-on-the-boundar.jpg',
          options: [
            {
              id: '1',
              text: 'Me'
            },
            {
              id: '2',
              text: 'Myself'
            },
            {
              id: '3',
              text: 'MSD'
            },
            {
              id: '4',
              text: 'Tera Bap'
            }
          ],
          correctAnswerId: 4
        },
        {
          id: '5',
          type: 'image',
          text: 'Who is this?',
          url: 'https://www.cricbuzz.com/a/img/v1/650x0/i1/c181291/rohit-sharma-became-the-sixth.jpg',
          options: [
            {
              id: '1',
              text: 'Me'
            },
            {
              id: '2',
              text: 'Myself'
            },
            {
              id: '3',
              text: 'MSD'
            },
            {
              id: '4',
              text: 'Tera Bap'
            }
          ],
          correctAnswerId: 4
        },

      ]
    }
  }

  answerHandler = (qId, id, correctAnswerId, score, challengedUserScore) => {
    if (correctAnswerId !== id) {
      this.setState({ underlayColor: '#B22222' })
      Vibration.vibrate(400);
    } else {
      this.setState({ underlayColor: '#004c00' })
    }
    let updatedScore = correctAnswerId === id ? Number(this.state.activeUserScore) + Number(score) : (Number(this.state.activeUserScore) - 5);
    this.setState({
      activeUserScore: updatedScore,
      challengedUserScore: updatedScore,
      quizStats: {
        ...this.state.quizStats,
        [qId]: id
      },
      answerSelected: id
    }, () => { this.resetTimer(id, correctAnswerId) })
  }
  setTimer = (time) => {
    let timeout = setInterval(() => {
      if (this.state.time >= time) {
        this.resetTimer()
        return
      }
      this.setState({
        time: ++this.state.time
      })

    }, 1000)
    this.setState({
      timer: timeout
    })
  }
  submitQuiz = () => {
    let challengeInfo = this.props.metaInfo && this.props.metaInfo.challengedUserInfo;
    console.log('----------challengeInfo--------------', challengeInfo)
    if (challengeInfo) {
      this.props.navigation.navigate('Win')
    } else {
      this.setState({
        showQuizDoneModal: true
      })
    }
    this.calculateScore()
    // this.props.navigation.navigate('QuizScore', this.calculateScore())
  }
  calculateScore = () => {
    this.props.dispatch(quizComplete(this.props.metaInfo.id, this.state.quizStats))
    return {
      score: this.state.activeUserScore
    }
  }
  resetTimer = (answer = null, correctAnswerId = null) => {
    clearInterval(this.state.timer)
    this.state.quizAnswers[this.props.questions[this.state.currentQuestion].id] = {
      given: answer,
      correct: correctAnswerId
    }
    if (this.state.currentQuestion >= this.props.questions.length - 1) {
      clearInterval(this.state.timer)
      this.submitQuiz()
      return
    }
    this.setState({
      time: 0,
      currentQuestion: ++this.state.currentQuestion,
    })
    if (this.props.questions[this.state.currentQuestion].type == 'text' ? 20 : 40) {

      this.setTimer(this.props.questions[this.state.currentQuestion].type == 'text' ? 20 : 40)
    }
  }
  componentDidMount() {
    this.props.navigation.state.params = {}
    const questions = this.props.questions;

    if (this.props.questions[this.state.currentQuestion].type == 'text') {
      this.setTimer(20)
    } else {
      this.setTimer(40)
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  challenge() {
    let challengeInfo = this.props.metaInfo && this.props.metaInfo.challengedUserInfo;
    if (challengeInfo) {
      this.props.navigation.navigate('Win')
    } else {
      this.setState({
        showQuizDoneModal: false
      });
      this.props.navigation.navigate('AddFriend', { quizId: this.props.metaInfo.id })
    }

  }

  async playSound() {
    const { audioPlay } = this.state;
    console.log('audioPlay----------->', audioPlay)
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: this.props.questions[this.state.currentQuestion].url });
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log('----error---------', error)
      // An error occurred!
    }
  }

  async stopSound() {
    console.log('--------Stop sound----------->')
    const soundObject = new Audio.Sound();
    try {
      // await soundObject.loadAsync({ uri: this.props.questions[this.state.currentQuestion].url });
      await soundObject.pauseAsync();
      // await soundObject.stopAsync();
      // Your sound is playing!
    } catch (error) {

      console.log('----error---------', error)
      // An error occurred!
    }
  }



  getRandomColor = () => colorsArray[Math.floor(Math.random() * colorsArray.length)]
  render() {
    console.log('--------challengedUserInfo---------', this.props.metaInfo.challengedUserInfo)
    const { underlayColor, audioPlay } = this.state;
    const questions = this.props.questions;
    let Timer = this.props.questions[this.state.currentQuestion].type == 'text' ? 20 : 40;
    if (this.props.questions[this.state.currentQuestion].type == 'audio') {
      this.playSound()
    }
    if (!audioPlay) {
      this.stopSound()
    }
    // console.log('-----questions-------', questions)
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Image source={topBg} />
        <Text style={{ position: 'absolute', top: 10, right: 50, color: '#fff', opacity: 0.8, fontSize: 20, }}>{this.props.metaInfo && this.props.metaInfo.quizCategory.category}</Text>
        <Text style={{ color: '#fff', fontSize: 15, position: 'absolute', top: 40, opacity: 0.8, right: 50 }}>Question {this.state.currentQuestion + 1}/{this.props.questions && this.props.questions.length}</Text>
        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 24, marginBottom: 40 }}>{this.props.questions && this.props.questions[this.state.currentQuestion].text}</Text>
          {
            this.props.questions && this.props.questions[this.state.currentQuestion].type === 'image' &&
            <Image
              style={{ width: '90%', height: 150, borderRadius: 20 }}
              source={{ uri: this.props.questions[this.state.currentQuestion].url }}
            />
          }
          {
            this.props.questions && this.props.questions[this.state.currentQuestion].type == 'audio' &&
            <View style={{ width: 300, height: 200 }}>
            </View>
          }
          {
            this.props.questions && this.props.questions[this.state.currentQuestion].type == 'video' &&
            <View>
              <Video
                source={{ uri: this.props.questions[this.state.currentQuestion].url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={this.state.videoPlay}
                isLooping
                style={{ width: 300, height: 170 }}
              />
            </View>
          }
          <View style={{ width: '90%', marginTop: 15 }}>
            {
              this.props.questions && this.props.questions[this.state.currentQuestion].options.map(option => {

                return (

                  <TouchableHighlight underlayColor={this.state.underlayColor}
                    onPress={() =>
                      this.answerHandler(
                        questions && questions[this.state.currentQuestion].id,
                        option.id,
                        questions && questions[this.state.currentQuestion].correctAnswerId,
                        questions && questions[this.state.currentQuestion].score,
                        questions && questions[this.state.currentQuestion].challengedUserScore,
                        this.setState({
                          videoPlay: this.props.questions[this.state.currentQuestion].type == 'video' ? false : true,
                          audioPlay: this.props.questions[this.state.currentQuestion].type == 'audio' ? false : true,
                        })
                      )}
                    key={option.id}
                    style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, height: 42, margin: 5, borderColor: 'grey', opacity: 0.9 }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>{option.text}</Text>
                  </TouchableHighlight>

                )
              })
            }
          </View>
          {/* ----------------------------------- Quiz Complete Modal ---------------------------- */}
          <Modal
            animationType={"fade"}
            transparent={true}
            style={{ width: '100%' }}
            visible={this.state.showQuizDoneModal}
            onRequestClose={() => { console.log("Modal has been closed.") }}>
            {/*All views of Modal*/}
            <View
              style={{ paddingBottom: 40, paddingTop: 30, paddingLeft: 25, paddingRight: 25, margin: 10, borderRadius: 10, position: 'absolute', top: '30%', justifyContent: 'flex-start', alignItems: 'center', width: '95%', backgroundColor: '#fff' }}>
              <TouchableOpacity
                onPress={() => { this.setState({ showQuizDoneModal: false }) }}
                style={{ flex: 1, alignContent: 'flex-end', left: 120, paddingBottom: 10, top: -10 }}>
                <Text>Close</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30 }}>Succefully Quiz Completed</Text>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <TouchableOpacity
                  onPress={() => { this.setState({ showQuizDoneModal: false }) }}
                  style={{
                    height: 110,
                    width: 110,
                    borderRadius: 16,
                    backgroundColor: this.getRandomColor(),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Image source={{ uri: this.props.metaInfo && this.props.metaInfo.activeUserInfo.imageUrl }} style={{ height: 40, width: 40, marginBottom: 10 }} />
                  <Text style={{ color: '#fff', fontSize: 18 }}>{this.props.metaInfo && this.props.metaInfo.activeUserInfo.username}</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>YOUR SCRORE</Text>
                  <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{this.state.activeUserScore}</Text>
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, }}>
                <TouchableOpacity
                  onPress={() => this.challenge()}
                  style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', flex: 1, height: 57, backgroundColor: '#FB6C7E', borderRadius: 8 }} >
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>CHALLENGE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* ------------------------------------------------------------------------------------ */}

        </View>
        <View style={{ width: '100%', backgroundColor: '#4D4CFF', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 65, position: 'absolute', bottom: 0, paddingLeft: 10, paddingRight: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', height: 60, borderRadius: 60 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: this.props.metaInfo && this.props.metaInfo.activeUserInfo.imageUrl }} style={{ width: 30, height: 30, borderRadius: 20 }} />
              <View style={{ marginLeft: 5 }}>
                <Text style={{ opacity: 0.6, color: '#fff', fontSize: 12 }}>{this.props.metaInfo && this.props.metaInfo.activeUserInfo.username}</Text>
                <Text style={{ opacity: 0.6, color: '#f9a602', fontSize: 12, }}>{this.state.activeUserScore}</Text>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 60, backgroundColor: '#212330' }}>
            <Text style={{ opacity: 0.6, color: '#fff', fontSize: 20 }}>{Timer - this.state.time}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            {this.props.metaInfo && this.props.metaInfo.challengedUserInfo ? <View style={{ justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 60 }}>
              <View style={{ marginRight: 5 }}>
                <Text style={{ opacity: 0.6, color: '#fff', fontSize: 12, }}>{this.props.metaInfo.challengedUserInfo.username}</Text>
                <Text style={{ opacity: 0.6, color: '#f9a602', fontSize: 12, alignSelf: 'center' }}>{this.state.challengedUserScore}</Text>
              </View>
              <Image source={{ uri: this.props.metaInfo.challengedUserInfo.imageUrl }} style={{ width: 30, height: 30, borderRadius: 20 }} />
            </View> : <View></View>}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('----QuizQuition-state----------->', state)
  return {
    questions: state.quiz.quizData && state.quiz.quizData.questions,
    metaInfo: state.quiz.quizData && state.quiz.quizData.metaInfo,
    notifications: state.notification.notifications
  }
}
export default connect(mapStateToProps)(QuizQuestions)

const styles = StyleSheet.create({
  heading: {
    alignItems: "flex-end",
    marginRight: 0,
    marginBottom: 30,
    justifyContent: 'center',
    flex: 0.9,
    backgroundColor: '#333B48',
    opacity: 0.8,
    height: 60,
    borderRadius: 7,
    borderBottomRightRadius: 0,
    marginLeft: 10,
    marginRight: 10
  },
  main: {
    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 6,
  },
  text: {
    marginTop: 30,
    color: '#FFFFFF'
  },
  profileStatusText: {
    opacity: 0.7,
    fontSize: 12,
    marginTop: 5,

  },
  profileStatusText_1: {
    opacity: 0.7,
    fontSize: 12,
    marginTop: 10,
    marginLeft: 3
  },
  profileStatusContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: 110,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }
})