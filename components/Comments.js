import React, {Component} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { normalize } from '../utils/font'
class Comments extends Component{
  state = {
    reply: '',
  }
  onPressHandler = () => {
    this.props.onChangeHandle(this.props.comment.commentId, this.state.reply)
    this.setState({
      reply: ''
    })
    this.refs.replyField.blur()
  }
  render(){
    const {commentId, commentText,username,userImageUrl, postedAgo, type} = this.props.comment
    return (
      <View style={{flex:1,flexDirection:'row', marginTop: 20, marginLeft: normalize(10)}}>
        <ImageBackground style={type==='reply' ? styles.replyImage:styles.image}
        imageStyle={{ borderRadius: 50 }} source={{
        uri: userImageUrl
      }}>
      </ImageBackground>
        <View style={{flex:6, marginLeft:normalize(8)}} >
          <View>
            <Text style={type === 'reply' ? styles.replyName : styles.name}>{username}</Text>
          </View>
           <View >
            <Text style={type === 'reply' ? styles.replyTime : styles.time}>{postedAgo}</Text>
          </View>
          <View >
            <Text style={type === 'reply' ? styles.replyComment : styles.comment}>{commentText}</Text>
          </View>
          {
            type !== "reply" && (
              <View style={{flexDirection: "row",position:'relative', flex:1, zIndex:2, zIndex: 10}}>
                <TextInput
                  ref="replyField"
                  style={styles.input}
                  placeholder="Reply"
                  value={this.state.reply}
                  onChangeText={(text) => {
                    this.setState({reply: text}) 
                  }}
                />
                <TouchableOpacity onPress={this.onPressHandler} style={{ flex:1,justifyContent: 'center', zIndex:1}}>
                  <Ionicons name="md-send" color="#FF1493" size={26}/>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  input: { 
    height: 40,
    marginRight: 10,
    zIndex: 10,
    flex:4,
    fontSize: normalize(18), 
    borderColor: '#BBBFCB', 
    borderWidth: 1, 
    borderTopWidth: 0,
    borderLeftWidth: 0, 
    borderRightWidth: 0 
  },
  replyInput: {
    height: 25,
    fontSize: normalize(16), 
    borderColor: '#BBBFCB', 
    borderWidth: 1, 
    borderTopWidth: 0,
    borderLeftWidth: 0, 
    borderRightWidth: 0 
  },
  replyImage: { 
    flex:1,
    borderRadius: 30, 
    width: 30, 
    height:30 
  },
  image: { 
    flex:1,
    borderRadius: 50, 
    width: 50, 
    height:50 },
  name: {
    color: '#0C0C0C',
    fontSize: normalize(17),
    fontWeight:'bold'
  },
  time: {
    color: '#AAB0BE',
    fontSize: normalize(12),
    position: 'relative',
    top: -5,
  },
  comment: {
    color: '#0C0C0C',
    fontSize: normalize(15),
  },
  reply: {
    width: '100%'
  },
  replyName: {
    color: '#0C0C0C',
    position: 'relative',
    left:-10,
    fontSize: normalize(14),
    fontWeight:'bold'
  },
  replyTime: {
    color: '#AAB0BE',
    position: 'relative',
    left:-10,
    top:-5,
    fontSize: normalize(11)
  },
  replyComment: {
    position: 'relative',
    left:-10,
    top: 5,
    color: '#0C0C0C',
    fontSize: normalize(12)
  },

})
export default Comments