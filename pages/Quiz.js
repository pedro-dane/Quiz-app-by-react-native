import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal, TextInput, ImageBackground } from 'react-native'
import QuizTabs from '../components/QuizTabs'
import PointsIcon from '../assets/icons/pointsIcon.png'
import LevelIcon from '../assets/icons/levelIcon.png'
import ExperienceIcon from '../assets/icons/experienceIcon.png'
import SmallFriendList from '../components/SmallFriendList'
import topBg from '../assets/images/topDesign.png'
import { colorsArray } from '../utils/colors'
import { connect } from 'react-redux'
import SelectCategories from './SelectCategories'
import { getQuizByCategory } from '../actions/Quiz/Quiz'
import InputBox from '../components/InputBox';
import FriendListItem from '../components/FriendListItem'

import { FontAwesome } from '@expo/vector-icons';
class Quiz extends Component {
  state = {
    liveQuizPin: '',
    enterAOP: false,
    liveQuizPrivilege: false,
    backgroundColors: ['#01CD98', '#F6B900', '#5351FC', '#5351FC', '#F64000', '#0184BA', '#FC6F82', '#01A1FF'],
    showStartQuizModal: false,
    activeTab: 'onlineQuiz',
    selectedCategory: '',
    liveQuiz: {
      name: 'Irish House',
      icon: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      experience: '+20',
      points: '+250',
      inviteList: [{
        id: '1',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Shivam Sharma',
        points: '200'
      }, {
        id: '2',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Shivam Sharma',
        points: '300'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Shivam Sharma',
        points: '300'
      },
      {
        id: '4',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Shivam Sharma',
        points: '300'
      },
      {
        id: '5',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Shivam Sharma',
        points: '300'
      }],
      friends: [{
        id: '1',
        url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-avatar-zoe-saldana.jpg'
      }, {
        id: '2',
        url: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/04/Pictures/india-arts-cinema-bollywood_37d0d12c-e6b9-11e9-a8aa-54897fdfe8ad.jpg'
      }, {
        id: '3',
        url: 'https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/22/Sunny-Leone-madhura-raja.jpg'
      }, {
        id: '4',
        url: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/04/Pictures/india-arts-cinema-bollywood_37d0d12c-e6b9-11e9-a8aa-54897fdfe8ad.jpg'
      }, {
        id: '5',
        url: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/04/Pictures/india-arts-cinema-bollywood_37d0d12c-e6b9-11e9-a8aa-54897fdfe8ad.jpg'
      }],
    },
    category: {
      id: 'hollywood',
      displayName: 'Hollywood',
      experience: '+5',
      points: '+100',
      friends: []
    },
    profileStatus: {
      experience: '245 / 435',
      level: 'Level-5',
      points: '4234'
    },
    categories: [
      {
        id: 'tvShow',
        displayName: 'TV Show',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 'history',
        displayName: 'History',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 'technology',
        displayName: 'Technology',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 'hollywood',
        displayName: 'Hollywood',
        url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    ]
  }
  onLivePinTextChange = (pin) => {
    this.setState({
      liveQuizPin: pin
    })
  }
  tabChangeHandler = (tabId) => {
    this.setState({
      activeTab: tabId
    })
  }
  inviteFriendLiveQuiz = (id) => {
    alert(`inviting ${id} to live quiz`)
  }
  loadCategoryQuiz = (category) => {
    this.props.dispatch(getQuizByCategory(category.id))
    this.setState({
      showStartQuizModal: true,
      selectedCategory: category,
    })
  }
  startQuiz = () => {
    this.setState({
      showStartQuizModal: false
    })
    this.props.navigation.navigate('QuizQuestions')
  }
  getRandomColor = () => colorsArray[Math.floor(Math.random() * colorsArray.length)]
  checkLiveQuizPrivilege = () => this.state.liveQuizPrivilege
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      if (this.props.navigation.state.params && this.props.navigation.state.params.showModal === true) {
        this.setState({
          showStartQuizModal: true
        })
        this.props.navigation.setParams({ showModal: false })
      }
    })
  }

  inviteFriends(item) {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 }}>
          <View style={{ flex: 1, alignItems: "flex-start", paddingBottom: 10, paddingLeft: 15 }}>
            <Image source={{ uri: item.url }} style={{ width: 40, height: 40, borderRadius: 20 }} />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start" }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Name</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 4 }}>
              <Image source={PointsIcon} style={{ height: 20, width: 20 }}></Image>
              <Text style={{ marginLeft: 3 }}>+250</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ flex: 1, marginRight: 10, borderRadius: 15, borderWidth: 1, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Text>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      (this.props.firstLogin === true || this.props.firstLogin === false) && !this.props.firstLogin ? <View style={{ flex: 1, marginTop: 20, opacity: this.state.showStartQuizModal ? 0.1 : 1, backgroundColor: 'black' }}>
        <View style={{ flex: 0.6, width: '100%', marginTop: 15, marginLeft: 10, marginRight: 10 }}>
          <QuizTabs activeTab={this.state.activeTab} tabChangeHandler={this.tabChangeHandler} />
        </View>
        <View style={{ flex: 1.2, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
          <View style={styles.profileStatusContainer}>
            <Image source={ExperienceIcon} />
            <Text style={styles.profileStatusText}>{this.props.metaInfo.profileStatus.experience}</Text>
          </View>
          <View style={{ width: 8, height: '100%' }}></View>
          <View style={styles.profileStatusContainer}>
            <Image source={PointsIcon} />
            <Text style={styles.profileStatusText}>{this.props.metaInfo.profileStatus.points}</Text>
          </View>
          <View style={{ width: 8, height: '100%' }}></View>
          <View style={styles.profileStatusContainer}>
            <Image source={LevelIcon} />
            <Text style={styles.profileStatusText}>{this.props.metaInfo.profileStatus.level}</Text>
          </View>
        </View>
        <View style={{ flex: 4.3 }}>
          <View style={styles.heading}>
            <View style={{ backgroundColor: '#333B48', height: 18, width: 170, borderBottomLeftRadius: 37, marginBottomRightRadius: 7, position: 'relative', bottom: -52 }}>
            </View>
            <Text style={{ marginRight: 20, marginBottom: 10, fontSize: 16, color: '#fff' }}>{this.state.activeTab === 'onlineQuiz' ? 'NEW GAME' : 'START PLAYING'}</Text>
          </View>
          {this.state.activeTab === 'onlineQuiz' && <View style={styles.main}>
            <View style={{ flex: 0.1 }}>
              <View style={{ backgroundColor: 'white', height: 50, width: 190, borderTopRightRadius: 37, position: 'relative', top: -20 }}>
                <Text style={{ paddingLeft: 10 }}>...Categories</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              </View>
            </View>
            <ScrollView style={{ flex: 5 }}>
              <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                {
                  this.props.metaInfo && this.props.metaInfo.categories && this.props.metaInfo.categories.length > 0 &&
                  this.props.metaInfo.categories.map((category, index) => {
                    return (
                      <TouchableOpacity onPress={() => this.loadCategoryQuiz(category)} key={category.id} style={{
                        height: 150,
                        margin: 10,
                        width: 150,
                        borderRadius: 10,
                        backgroundColor: this.getRandomColor(),
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Image source={{ uri: category.url }} style={{ height: 40, width: 40, marginBottom: 10 }} />
                        <Text style={{ color: '#fff', fontSize: 18 }}>{category.displayName}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>}
          {this.state.activeTab === 'liveQuiz' && <View style={styles.main}>
            <View style={{ flex: 0.02 }}>
              <View style={{ zIndex: -1, backgroundColor: '#fff', height: 30, width: 190, borderTopRightRadius: 37, position: 'relative', top: -20 }}>
              </View>

            </View>
            {this.checkLiveQuizPrivilege() ? <ScrollView style={{ flex: 6, backgroundColor: '#fff' }}>
              <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', zIndex: 10 }}>
                  <ImageBackground source={{
                    uri: this.state.liveQuiz.url
                  }}
                    style={{ marginLeft: 10, width: 130, height: 120, borderRadius: 20, backgroundColor: '#06010F', justifyContent: 'center', alignItems: 'center' }}
                    imageStyle={{ borderRadius: 20, opacity: 0.5 }}>
                    <View style={{ alignItems: 'center' }}>
                      <Image source={{ uri: this.state.liveQuiz.icon }} style={{ width: 20, height: 20, margin: 7 }} />
                      <Text style={{ color: 'white', fontSize: 16, opacity: 0.7 }}>{this.state.liveQuiz.name}</Text>
                    </View>
                  </ImageBackground>
                  <View style={{ justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                        <Image source={ExperienceIcon} />
                        <Text style={[styles.profileStatusText_1]}>{this.state.liveQuiz.experience}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={PointsIcon} />
                        <Text style={[styles.profileStatusText]}>{this.state.liveQuiz.points}</Text>
                      </View>
                    </View>
                    <View style={{ marginLeft: 28, marginTop: 10 }}>
                      <SmallFriendList friends={this.state.liveQuiz.friends} />
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 5, marginLeft: '48%' }}>
                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 170, height: 50, backgroundColor: '#FB6C7E', borderRadius: 10 }} onPress={this.startQuiz}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Enter Quiz</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#011209', fontSize: 14 }}>
                  <Text style={{ color: '#29DC7D', fontSize: 30 }}>...</Text>Make your group
                  </Text>
                {
                  this.state.liveQuiz.inviteList.map(friend => (
                    <View key={friend.id} style={{ flexDirection: 'row' }}>
                      <View style={{ marginTop: 8, flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3D3D3', opacity: 0.8, borderRadius: 15, height: 50 }}>
                        <Image style={{ alignSelf: 'center', borderRadius: 15, width: 28, height: 28 }}
                          source={{ uri: friend.url }}>
                        </Image>
                      </View>
                      <View style={{ marginLeft: 20, flex: 3, height: 70, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderColor: '#eee8e8' }}>
                        <View style={{ flex: 2 }}>
                          <Text>{friend.name}</Text>
                          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image source={PointsIcon} style={{ width: 30, marginRight: 20, height: 30 }}></Image>
                            <Text>{friend.points}</Text>
                          </View>
                        </View>

                        <View style={{ flex: 1.3 }}>
                          <TouchableOpacity onPress={() => this.inviteFriendLiveQuiz(friend.id)} style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: 87, height: 35, borderRadius: 10 }}>
                            <Text>Invite</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))
                }
              </View>
            </ScrollView> :
              <ScrollView>
                {
                  //------------------------------------ Live AOP QUIZE PIN --------------------------- 
                  !this.state.enterAOP &&
                  <View
                    style={{ flex: 1, backgroundColor: '#F64000', justifyContent: 'center', alignItems: 'center', margin: 20, borderRadius: 20, paddingVertical: 100, marginTop: 30 }}>
                    <TextInput placeholder="AOP QUIZE PIN" style={{ width: '50%', paddingLeft: 20, paddingRight: 20, paddingBottom: 5, paddingTop: 5, fontSize: 15, color: 'black', backgroundColor: 'white', borderColor: 'black', borderRadius: 5, borderWidth: 0.1 }}></TextInput>
                    <TouchableOpacity
                      onPress={() => this.setState({ enterAOP: true })}
                      style={{
                        textAlign: 'center',
                        marginTop: 20,
                        width: '50%',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 9,
                        paddingTop: 9,
                        backgroundColor: 'black',
                        borderColor: 'black',
                        borderRadius: 5,
                        borderWidth: 0.1
                      }}>
                      <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>ENTER</Text>
                    </TouchableOpacity>
                  </View>
                }
                {
                  // ----------------------------------- LIVE ENTER QUIZ -------------------------------------- 
                  this.state.enterAOP &&
                  <View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25, margin: 10, borderRadius: 10, alignItems: 'center', width: '95%', backgroundColor: '#FFF' }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                      <View style={{
                        height: 110,
                        width: 110,
                        borderRadius: 16,
                        backgroundColor: this.getRandomColor(),
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Image source={{ uri: this.props.metaInfo.categories.filter(category => category.id === this.state.selectedCategory).length > 0 && this.props.metaInfo.categories.filter(category => category.id === this.state.selectedCategory)[0].url }} />
                        <Text style={{ color: '#fff', fontSize: 18 }}>{this.props.metaInfo.categories.filter(category => category.id === this.state.selectedCategory).length > 0 && this.props.metaInfo.categories.filter(category => category.id === this.state.selectedCategory)[0].displayName}</Text>
                      </View>
                      <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 25, paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image source={ExperienceIcon} />
                          <Text style={styles.profileStatusText_1}>+{this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.experience}</Text>
                          <Image source={PointsIcon} style={{ marginLeft: 15 }}></Image>
                          <Text style={styles.profileStatusText_1}>+{this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.points}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                          {
                            [...Array(5)].map((i) => {
                              return (
                                <View style={{ marginLeft: 4 }}>
                                  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx68RNvS6k_KVe295tsPHj010U-sRx7FGrhjdzYBMKGwehjHWg' }} style={{ width: 30, height: 30, borderRadius: 20, }} />
                                </View>
                              )
                            })
                          }
                        </View>
                        <View style={{ marginLeft: 28, marginTop: 10, width: '100%', }}>
                          <SmallFriendList friends={this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.friends} />
                        </View>
                      </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, }}>
                      <TouchableOpacity
                        // onPress={this.startQuiz}
                        style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 57, backgroundColor: '#a0a0a0', borderRadius: 8 }}>
                        <FontAwesome name="send" color="#FFF" size={24} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        // onPress={this.startQuiz}
                        onPress={() => this.props.navigation.navigate('Win')}
                        style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', flex: 1, height: 57, backgroundColor: '#FB6C7E', borderRadius: 8 }} >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>ENTER QUIZ</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              </ScrollView>}
            {/* ----------------------------------- INVITE FRIENDS LIST --------------------------------------  */}
            <View style={{ flex: 20, marginLeft: 0, paddingHorizontal: 20 }}>
              <FlatList
                initialNumToRender={10}
                showsVerticalScrollIndicator={false}
                data={this.state.categories}
                style={{ marginLeft: 0 }}
                renderItem={({ item }) => (
                  this.inviteFriends(item)
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          }


        </View>
        <Modal
          animationType={"fade"}
          transparent={true}
          style={{ width: '100%' }}
          visible={this.state.showStartQuizModal}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          {/*All views of Modal*/}
          <View style={{ paddingBottom: 40, paddingTop: 40, paddingLeft: 25, paddingRight: 25, margin: 10, borderRadius: 10, position: 'absolute', top: '30%', justifyContent: 'flex-start', alignItems: 'center', width: '95%', backgroundColor: '#fff' }}>
            <TouchableOpacity
              onPress={() => { this.setState({ showStartQuizModal: false }) }}
              style={{ marginLeft: 250, paddingBottom: 10, top: -20}}>
              <Text>Close</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <TouchableOpacity
                onPress={() => { this.setState({ showStartQuizModal: false }) }}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 16,
                  backgroundColor: this.getRandomColor(),
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image source={{

                  uri: this.props.quizData && this.props.quizData.metaInfo ? this.props.quizData.metaInfo.url : this.state.selectedCategory.url
                }} style={{ height: 40, width: 40, marginBottom: 10 }} />
                <Text style={{ color: '#fff', fontSize: 18 }}>
                  {
                    this.props.quizData && this.props.quizData.metaInfo ? this.props.quizData.metaInfo.displayName :
                      this.state.selectedCategory.displayName
                  }
                </Text>
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginLeft: 26 }}>
                  <Image source={ExperienceIcon} />
                  <Text style={styles.profileStatusText_1}>+{this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.experience}</Text>
                  <Image source={PointsIcon} style={{ marginLeft: 15 }}></Image>
                  <Text style={styles.profileStatusText_1}>+{this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.points}</Text>
                </View>
                <View style={{ marginLeft: 28, marginTop: 10, width: '100%', }}>
                  <SmallFriendList friends={this.props.quizData && this.props.quizData.metaInfo && this.props.quizData.metaInfo.friends} />
                </View>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, }}>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 57, backgroundColor: '#a0a0a0', borderRadius: 8 }} onPress={this.startQuiz}>
                <FontAwesome name="send" color="#FFF" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.startQuiz}
                style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', flex: 1, height: 57, backgroundColor: '#FB6C7E', borderRadius: 8 }} >
                <Text style={{ color: '#fff', fontSize: 16 }}>Start Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View > : <SelectCategories />
    )
  }
}
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
const mapStateToProps = (state) => {
  console.log('---------quiz State----------------', state)
  return {
    firstLogin: state.common.firstLogin,
    metaInfo: state.quiz.metaInfo,
    quizData: state.quiz.quizData,
    notifications: state.notification.notifications
  }
}
export default connect(mapStateToProps)(Quiz)