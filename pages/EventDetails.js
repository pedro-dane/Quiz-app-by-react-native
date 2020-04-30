import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Comments from '../components/Comments'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import AddComment from '../components/AddComment'
import { Dimensions, Platform, PixelRatio } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import SmallFriendList from '../components/SmallFriendList'
import { normalize } from '../utils/font'
import { connect } from 'react-redux'
import { fetchEventDetails, postComment, isInterestedForEvent} from '../actions/Discover/discover'
import DefaultImageThumbnail from '../assets/images/DefaultImageThumbnail.gif'
class EventDetails extends Component {
  state = {
    shouldInterestedButtonDisable : false,
    name: 'Stranger Things',
    description: 'description description description description description description description description description description description description',
    venue: 'Bahot pass',
    url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
    date: '12 july, 2019',
    time: '8 Pm',
    friends: [{}, {}],
    comments: [{
      "commentId": "1",
      "commentText": "Comment 1",
      "username": "Alok Singh",
      "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
      "postedAgo": "43 Minutes Ago",
      "replies": [
        {
          "commentId": "2",
          "commentText": "Comment 2",
          "username": "Alok Singh",
          "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          "postedAgo": "41 Minutes Ago",
          "replies": []
        },
        {
          "commentId": "7",
          "commentText": "Comment 2",
          "username": "Alok Singh",
          "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          "postedAgo": "41 Minutes Ago",
          "replies": []
        }
      ]
    }, {
      "commentId": "3",
      "commentText": "Comment 1",
      "username": "Alok Singh",
      "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
      "postedAgo": "43 Minutes Ago",
      "replies": [
        {
          "commentId": "0",
          "commentText": "Comment 100",
          "username": "Alok Singh",
          "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          "postedAgo": "41 Minutes Ago",
          "replies": []
        },
        {
          "commentId": "200",
          "commentText": "Comment 2",
          "username": "Alok Singh",
          "userImageUrl": 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
          "postedAgo": "41 Minutes Ago",
          "replies": []
        }
      ]
    }]
  }
  successPostComment = () => {
    this.props.dispatch(fetchEventDetails(this.props.navigation.state.params.id))
  }
  replyHandler = (commentId, text) => {
    if (text === '') {
      alert('Please type something')
      return
    }
    this.props.dispatch(postComment(this.successPostComment, { commentText: text, replyId: commentId }, this.props.event.id))
  }
  addNewCommentHandler = (text) => {
    if (text === '') {
      alert('Please type something')
      return
    }
    this.props.dispatch(postComment(this.successPostComment, { commentText: text }, this.props.event.id))
  }
  componentDidMount() {
    this.setState({
      shouldInterestedButtonDisable: this.props.event ? this.props.event.isInterested : false
    })
    this.props.navigation.addListener('didFocus', () => {
      this.props.dispatch(fetchEventDetails(this.props.navigation.state.params.id))
    })
  }
  interestedHandler = (id) => {
    this.setState({
      shouldInterestedButtonDisable: true
    })
    this.props.dispatch(isInterestedForEvent(id))
  }
  render() {
    const { id, name, description, venue, url, date, time, comments, city, userList, isInterested } = (this.props.event ? this.props.event : {})
    return (
      <View style={{ flex: 1, height: '100%', backgroundColor: '#fff', alignItems: 'flex-start' }}>
        <ImageBackground imageStyle={{ opacity: 0.7, borderRadius: 15 }} style={styles.imageBackground} source={
          url ? {
            uri: url
          } : DefaultImageThumbnail

        }>
          <View style={{ position: 'relative', top: normalize(100), overflow: 'hidden', marginLeft: 12, alignSelf: 'flex-start' }}>
            {name && <Text style={styles.name}>{name}</Text>}
            {description && <Text style={styles.description}>{description}</Text>}
            {venue && <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", position: 'relative', left: -4, marginBottom: normalize(10) }}>
              <EvilIcons name="location" size={25} color="#fff" style={{ opacity: 0.7 }} />
              <Text style={styles.text}>{venue}, {city}</Text>
            </View>}
            {date && time && <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <Ionicons name="md-time" size={22} color="#fff" style={{ marginRight: 6, opacity: 0.7 }} />
              <Text style={styles.text}>{date} {time} onwards</Text>
            </View>}
            <View style={{ marginBottom: normalize(10), justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginTop: normalize(10), flexDirection: 'row' }}>
              {this.props.event.userList && <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', zIndex: 1000, flex: 1, position: 'relative' }}>
                <SmallFriendList friends={this.props.event.userList} />
              </View>}
              <TouchableOpacity disabled={this.state.shouldInterestedButtonDisable} onPress={() => this.interestedHandler(id)} style={{ flex: 0.8, backgroundColor: '#ff2c55', borderRadius: 8, width: '60%', height: normalize(40), alignSelf: 'flex-end', marginRight: 20, justifyContent: 'space-around', paddingRight: 17, alignItems: 'center', flexDirection: 'row' }}>
                <AntDesign name="star" color='#fff' size={24} />
                <Text style={{ color: 'white', fontSize: normalize(12) }}>Interested</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 8 }}>
          <ScrollView keyboardShouldPersistTaps="always" style={{ flex: 1, height: '100%', backgroundColor: '#fff' }}>
            {
              comments && comments.map(comment => (
                <View key={comment.commentId}>
                  <View behavior="padding" style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Comments onChangeHandle={this.replyHandler} comment={{ commentId: comment.commentId, commentText: comment.commentText, username: comment.username, userImageUrl: comment.userImageUrl, postedAgo: comment.postedAgo }} />
                  </View>
                  {
                    comment.replies.map(reply => (
                      <View key={reply.commentId} behavior="padding" style={{ flex: 1, marginLeft: 50, justifyContent: 'flex-end' }}>
                        <Comments onChangeHandle={this.replyHandler} comment={{ commentId: reply.commentId, commentText: reply.commentText, username: reply.username, userImageUrl: reply.userImageUrl, postedAgo: reply.postedAgo, type: 'reply' }} />
                      </View>
                    ))
                  }
                </View>
              ))
            }
          </ScrollView>
          <View style={{ width: '100%', height: 60, marginTop: 10, backgroundColor: '#F8F8F8', justifyContent: 'center' }}>
            <AddComment clickHandle={this.addNewCommentHandler} />
          </View>
        </KeyboardAvoidingView>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  description: {
    color: 'white',
    fontSize: normalize(14),
    alignSelf: 'flex-start',
    textAlign: 'justify',
    lineHeight: normalize(17),
    opacity: 0.8,
    marginRight: normalize(10),
    marginBottom: normalize(20)
  },
  shadow: {
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: 1,
    margin: normalize(40),
    shadowRadius: 70,
  },
  imageBackground: {
    backgroundColor: '#000',
    flex: 1.3,
    borderRadius: 15,
    marginBottom: normalize(20),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: normalize(12),
  },
  name: {
    color: 'white',
    fontSize: normalize(25),
    position: 'relative',
    left: -4,
    marginBottom: normalize(10)
  }
})
const mapStateToProps = (state) => {
  return {
    event: state.discover.event
  }
}
export default connect(mapStateToProps)(EventDetails)