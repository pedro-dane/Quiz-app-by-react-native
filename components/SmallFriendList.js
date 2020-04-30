import React from 'react'
import { View, Image, ImageBackground, Text } from 'react-native'

const SmallFriendList = ({ friends }) => (

  friends ? friends.length > 0 ? <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
    {
      friends.slice(0, 3).map(friend => {
        return (
          <View key={friend.id} style={{ justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ width: 35, height: 35, borderRadius: 18, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
              <Text>{friend.imageUrl}</Text>
            </View>
            <Image key={friend.id} source={{ uri: friend.imageUrl }} style={{ width: 35, height: 35, borderRadius: 18, borderWidth: 1, borderColor: '#fff', marginRight: 5 }} />
          </View>
        )
      })
    }

    {
      friends.length > 3 && <ImageBackground source={{
        uri: friends[3].imageUrl
      }} style={{ width: 35, height: 35, borderRadius: 18, backgroundColor: '#06010F', justifyContent: 'center', alignItems: 'center', bottom: 18 }}
        imageStyle={{ borderRadius: 20, opacity: 0.5 }}>
        <Text style={{ color: '#fff' }}>+ {friends.length - 3}</Text>
      </ImageBackground>
    }
  </View> : <View></View> : <View></View>
)
export default SmallFriendList