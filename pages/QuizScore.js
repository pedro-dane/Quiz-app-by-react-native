import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, Modal } from 'react-native'
import PointsIcon from '../assets/icons/pointsIcon.png'
import LevelIcon from '../assets/icons/levelIcon.png'
import ExperienceIcon from '../assets/icons/experienceIcon.png'
import { FontAwesome } from '@expo/vector-icons';
import BackButton from '../components/back'
import { BackHandler } from 'react-native';
import { connect } from 'react-redux'
class QuizScore extends Component {
  state = {
    showRateUsModal: false,
    rate: 0,
    result: {
      name: 'Shivam Sharma',
      url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      quizScore: '68',
      experience: '431/ 456',
      points: '2000',
      level: 'Level-3'
    }
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }
  onBackButtonPressed = () => {
    this.props.navigation.navigate('Quiz')
  }
  rateUsHandler = () => {
    this.setState({
      showRateUsModal: true
    })
  }
  rateClickHandler = (value) => {
    this.setState({
      rate: value
    })
  }
  submitRate = () => {
    this.setState({
      showRateUsModal: false
    })
    // alert(this.state.rate > 0 ? this.state.rate : 'maybe later')
  }
  takeNewQuizHandler = () => {
    this.props.navigation.navigate('Quiz')
  }
  render() {
    console.log('------scrore sceen----------', this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        {/* <TouchableOpacity style={{ position: 'absolute', top: 20, left: 10 }} onPress={this.onBackButtonPressed}><BackButton /></TouchableOpacity>
        <Text style={{ color: '#F6B900', fontSize: 24 }}>{this.props.result.result}</Text>
        <Image source={{ uri: this.props.result.url }} style={{ marginBottom: 20, marginTop: 30, width: 120, height: 120, borderRadius: 60 }} />
        <Text style={{ color: '#fff', fontSize: 24 }}>{this.props.result.name}</Text>
        <Text style={{ color: '#F6B900', fontSize: 20 }}>{this.props.navigation.state.params.score}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.profileStatusContainer}>
            <Image source={ExperienceIcon} />
            <Text style={styles.profileStatusText}>{this.props.result.experience}</Text>
          </View>
          <View style={styles.profileStatusContainer}>
            <Image source={PointsIcon} />
            <Text style={styles.profileStatusText}>{this.props.result.points}</Text>
          </View>
          <View style={styles.profileStatusContainer}>
            <Image source={LevelIcon} />
            <Text style={styles.profileStatusText}>{this.props.result.level}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.rateUsHandler} style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', width: 200, height: 50, backgroundColor: '#FB6C7E', borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>RATE US</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.takeNewQuizHandler} style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', width: 200, height: 50, backgroundColor: '#FB6C7E', borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>TAKE A NEW QUIZ</Text>
        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          style={{ width: '100%' }}
          visible={this.state.showRateUsModal}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          <View style={{ borderRadius: 20, position: 'absolute', top: '20%', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: 280, backgroundColor: '#fff' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
              <View style={{}}>
                <Text>Rate your experience with AOP?</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {
                  [1, 2, 3, 4, 5].map((value) => (
                    <TouchableOpacity onPress={() => this.rateClickHandler(value)} key={value} style={{ margin: 10 }}>
                      <FontAwesome color="#FF8C00" name={this.state.rate >= value ? 'star' : 'star-o'} size={30} />
                    </TouchableOpacity>

                  ))
                }
              </View>
            </View>
            <View>
              <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', width: 200, height: 50, backgroundColor: '#FF8C00', borderRadius: 10 }} onPress={this.submitRate}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }} onPress={this.submitRate}>
                <Text style={{ color: '#CCCCCC', fontSize: 16 }}>Maybe later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  profileStatusContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileStatusText: {
    color: '#fff',
    fontSize: 16
  }
})
const mapStateToProps = (state) => ({
  result: state.quiz && state.quiz.result
})
export default connect(mapStateToProps)(QuizScore)