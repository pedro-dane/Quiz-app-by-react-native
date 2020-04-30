import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// const FriendListItem = ({ friend: { imageUrl, id, name, description, type, alreadyFriend }, friendActionHandler }) => (
const History = ({ friend: { imageUrl, id, name }, friendActionHandler }) => {
  console.log('--------imageUrl------------', imageUrl) 
  return (

    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',marginHorizontal:'3%' }}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Image source={{ url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg' }} style={{ width: 58, height: 58, borderRadius: 30 ,borderWidth:2,borderColor:'red'}} />
        </View>
        <View style={{ flex: 2, alignItems: "flex-start" }}>
          <Text style={{ color: '#fff', fontSize: 15 }}>{name}</Text>
          <Text style={{ color: '#fff', fontSize: 12, opacity: 0.5 }}>You're friends on Facebook</Text>
        </View>
        <TouchableOpacity  style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
        <Ionicons
            name="md-checkmark-circle"
            color="red"
            size={24}
          /> 
          
        {/* {
          alreadyFriend ? type === 'invite' ? <Ionicons
            name="md-checkmark-circle"
            color="red"
            size={24}
          /> : <View style={styles.removeFriendButton}>
              <Text style={{ color: 'red', fontSize: 12 }}>Remove</Text>
            </View> : type === 'invite' ? <Ionicons
              name="md-add-circle"
              color="red"
              size={24}
            /> : 
            <LinearGradient style={styles.addFriendButton} start={[0, 1]} end={[0, 0]}
              colors={['#F67220', '#F77D28', '#F88F33', '#F9A340', '#F9B54A', '#F9B54A']}>
                <Text style={{ color: 'white', fontSize: 12 }}>Add</Text>
              </LinearGradient>
        } */}
      </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: 'black', height: 1.2, marginLeft: 80, marginTop: 18, marginBottom: 18 }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default History