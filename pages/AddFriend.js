import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import FriendListItem from '../components/FriendListItem'
import Search from '../components/Search'
import { getAllFriends } from '../actions/Friends/Friends';
import { challengeUserForQuiz } from '../actions/Quiz/Quiz';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'


class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuizId: '',
      allFriendList: [],
      friends: [
        {
          id: '1',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        },
        {
          id: '2',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        },
        {
          id: '3',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        },
        {
          id: '4',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        }, {
          id: '5',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: true,
          type: 'friendRequest'
        },
        {
          id: '6',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        },
        {
          id: '7',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: false,
          type: 'friendRequest'
        },
        {
          id: '8',
          url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          name: 'Shivam Sharma',
          description: 'you have connection in facebook',
          alreadyFriend: true,
          type: 'friendRequest'
        }
      ]
    }
  }

  componentDidMount() {


    if (this.props.navigation.state.params !== undefined && this.props.navigation.state.params.quizId) {
      this.setState({
        QuizId: this.props.navigation.state.params.quizId
      })
    }
    this.props.dispatch(getAllFriends())
    setTimeout(() => {
      const friendList = this.props.allFriend == undefined ? [] : this.props.allFriend;
      if (friendList) {
        let data = [];
        friendList.map((item, index) => {
          let demoObj = { ...item, isInvited: false }
          data.push(demoObj)
        })
        this.setState({
          allFriendList: data
        })
      }
    }, 100)

  }
  friendActionHandler = (type, id, alreadyFriend) => {
    // alert(`${type} to id ${id} action alreadyFriend ${alreadyFriend}}`)
  }
  inviteFriend = (friendId) => {
    const { QuizId, allFriendList } = this.state

    this.props.dispatch(challengeUserForQuiz(QuizId, friendId))

    // setTimeout(() => {
    const challengeUserRes = this.props.challengeUser
    if (challengeUserRes && challengeUserRes.success) {
      if (allFriendList && allFriendList.length > 0) {
        let finnalData = allFriendList.map((value, index) => {
          if (value.id == friendId) {
            value.isInvited = true
          }
          return value
        })
        this.setState({
          allFriendList: finnalData
        })
      }
    }
    // }, 100)

  }

  inviteFriendHandler = () => {
    this.props.navigation.navigate('InviteFriends')
  }

  renderItem(itemdata) {
    const challengeUserRes = this.props.challengeUser
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Image source={{ uri: this.state.friends[2].url }} style={{ width: 58, height: 58, borderRadius: 30 }} />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start" }}>
            <Text style={{ color: '#fff', fontSize: 15 }}>{itemdata.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.inviteFriend(itemdata.id)}
            style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
            <LinearGradient style={styles.addFriendButton} start={[0, 1]} end={[0, 0]}
              colors={['#F67220', '#F77D28', '#F88F33', '#F9A340', '#F9B54A', '#F9B54A']}>
              {
                itemdata.isInvited ?
                  <Text style={{ color: 'white', fontSize: 12 }}>Invited</Text>
                  :
                  <Text style={{ color: 'white', fontSize: 12 }}>Invite</Text>
              }
            </LinearGradient>

          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', backgroundColor: 'black', height: 1.2, marginLeft: 80, marginTop: 18, marginBottom: 18 }}></View>
      </View>
    )
  }


  render() {
    const { allFriendList } = this.state;
    const friendList = this.props.allFriend == undefined ? [] : this.props.allFriend;
    return (
      <View style={{ flex: 1, marginTop: 60, marginLeft: 20 }}>
        <View style={styles.header}>
          <Text style={{ flex: 1, color: '#fff', fontSize: 27, marginTop: 5 }}>Add Friends</Text>
          <View style={{ width: '98%', alignSelf: 'center', textAlign: 'center' }}>
            <Search />
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20 }}>
            <TouchableOpacity onPress={this.inviteFriendHandler}>
              <Text style={{ color: "#FB8A00", fontSize: 15 }}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginTop: 20, marginLeft: 0, paddingHorizontal: 20 }}>
            <FlatList
              initialNumToRender={10}
              data={allFriendList}
              style={{ marginLeft: 0 }}
              renderItem={({ item }) => (
                <View >
                  {
                    this.renderItem(item)
                  }
                  {/* <FriendListItem friend={friendList} friendActionHandler={this.friendActionHandler} /> */}
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    challengeUser: state.quiz.challengeUserQuizData,
    allFriend: state.Friend && state.Friend.friend,
    questions: state.quiz.quizData && state.quiz.quizData.questions,
    metaInfo: state.quiz.quizData && state.quiz.quizData.metaInfo
  }
}
export default connect(mapStateToProps)(AddFriend)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20
  },
  main: {
    flex: 4,
  },
  removeFriendButton: {
    width: "90%",
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red"
  },
  addFriendButton: {
    width: "90%",
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
})