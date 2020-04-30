import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import NotificationCard from '../components/NotificationCard'
import { connect } from 'react-redux'
import { getAllNotification, markNotificationReadCreater, notificationReadAction} from '../actions/Notification/Notification'
import {getQuizById} from '../actions/Quiz/Quiz'
import {fetchEventDetails} from '../actions/Discover/discover'
class Notification extends Component {
  state = {
    notifications: [
      {
        id: 1,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'challenge'
      },
      {
        id: 2,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'invite'
      },
      {
        id: 3,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'update'
      },

      {
        id: 4,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'challenge'
      },
      {
        id: 5,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'invite'
      },
      {
        id: 6,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'update'
      },

      {
        id: 7,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'challenge'
      },
      {
        id: 8,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'invite'
      },
      {
        id: 9,
        text: 'Shivam Sharma challenged you for Bollywood Quiz',
        avatarUrl: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        time: '2 hours ago',
        type: 'update'
      }
    ]
  }
  notificationActionSuccessCallback = () => {
    this.props.navigation.navigate('Quiz', {showModal: true})
  }
  notificationAction = (notificationResponse) => {
    this.props.dispatch(markNotificationReadCreater(notificationResponse.id, notificationResponse.flag))
    if (notificationResponse.type === 'invite') {
      this.props.dispatch(notificationReadAction({id: notificationResponse.id, eventId: notificationResponse.eventId, action:notificationResponse.flag}))

      if (notificationResponse.flag === 'positive') {
        this.props.dispatch(fetchEventDetails(notificationResponse.eventId, () => {
          this.props.navigation.navigate('EventDetails')
        }))
      }
      else if (notificationResponse.flag === 'negative') {
        return
      }
    }
    else if (notificationResponse.type === 'challenge') {
      this.props.dispatch(notificationReadAction({id: notificationResponse.id, quizId: notificationResponse.quizId, action:notificationResponse.flag}))
      if (notificationResponse.flag === 'positive') {
        // alert(notificationResponse.quizId)
        this.props.dispatch(getQuizById(this.notificationActionSuccessCallback, notificationResponse.quizId, notificationResponse.challengedUserId))
      }
      else if (notificationResponse.flag === 'negative') {
        return
      }
    }
    else {

    }
  }
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.dispatch(getAllNotification())
    })

  }
  render() {
    return (
      <View style={{ flex: 1, marginLeft: 20, marginBottom: 10 }}>
        <Text style={styles.text}>Notification</Text>
        <FlatList
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          data={this.props.notifications}
          renderItem={({ item }) => (
            <NotificationCard clickHandle={this.notificationAction} notification={item} />
          )}
          keyExtractor={item => item.id + ''}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: '#fff',
    fontSize: 30,
    marginBottom: 20
  }
})
const mapStateToProps = (state) => {
  console.log('notifications', state.notification)
  return {
    notifications: state.notification.notifications
  }
}
export default connect(mapStateToProps)(Notification)