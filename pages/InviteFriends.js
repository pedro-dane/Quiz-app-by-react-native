import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import FriendListItem from '../components/FriendListItem'
import CloseButton from '../components/close'
class InviteFriends extends Component{
  state = {
    friends: [
      {
        id: '1',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },
      {
        id: '2',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },
      {
        id: '3',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },
      {
        id: '4',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },{
        id: '5',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: true,
        type: 'invite'
      },
      {
        id: '6',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },
      {
        id: '7',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: false,
        type: 'invite'
      },
      {
        id: '8',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        name: 'Shivam Sharma',
        description: 'you have connection in facebook',
        alreadyFriend: true,
        type: 'invite'
      }
    ]
  }
  close = () => {
    this.props.navigation.goBack()
  }
  handleSubmit = () => {
    alert('submit')
  }
  friendActionHandler = (type, id, alreadyFriend) => {
    // alert(`${type} to id ${id} action alreadyFriend ${alreadyFriend}}`)
  }
  render(){
    return (
      <View style={{flex:1, marginTop:40}}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={this.close}>
            <CloseButton />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20, marginTop:10}} onPress={this.handleSubmit} >
            <Text style={{ color: 'red', fontSize: 16}}>Done</Text>
          </TouchableOpacity>
        </View>
        <Text style={{flex:0.1, marginBottom: 20, marginLeft: 20, color: '#fff', fontSize: 30}}>Invite Friend</Text>
        <FlatList
            style={{flex:1}}
            initialNumToRender={10}
            data={this.state.friends}
            renderItem={({ item }) => (
              <View style={{ height: 120}}>
                <FriendListItem friend= {item} friendActionHandler={this.friendActionHandler}/>
              </View>
            )}
            keyExtractor={item => item.id}
          />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  heading: {
    flexDirection:'row',
    marginBottom: 20,

    justifyContent: 'space-between'
  }
})
export default InviteFriends