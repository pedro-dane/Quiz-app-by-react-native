import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const NotificationCard = ({ notification: { avatarUrl, text, time, type, quizId, eventId, challengedUserId, id, action}, clickHandle }) => (
  type !== 'update' ? <View style={{ flexDirection: 'row', marginTop: 20, borderTopWidth: 1, paddingTop: 20, borderColor: '#474547' }}>
    <ImageBackground style={styles.image}
      imageStyle={{ borderRadius: 50 }} source={{
        uri: avatarUrl
      }}>
    </ImageBackground>
    <View style={{ flex: 4, marginLeft: 10 }} >
      <View>
        <Text style={styles.name}>{text}</Text>
      </View>
      <View >
        <Text style={styles.time}>{time}</Text>
      </View>
      {
        type === 'invite' ? (
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 }}>
            <TouchableOpacity  disabled = {Boolean(action)} onPress={() => clickHandle({ type, flag: 'positive', eventId,id })} style={action ? action === 'positive'? styles.activeButton : styles.disabled : styles.buttonChallenge}>
              <Text style={action ? action === 'positive'? styles.activeButtonText : styles.disabledText : styles.buttonText}>INTERESTED</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled = {Boolean(action)} onPress={() => clickHandle({ type, flag: 'negative', eventId,id })} style={action ? action === 'negative'? styles.activeButton : styles.disabled : styles.buttonChallenge}>
              <Text style={action ? action === 'negative'? styles.activeButtonText : styles.disabledText : styles.buttonText}>NOT GOING</Text>
            </TouchableOpacity>
          </View>
        ) : type === 'challenge' ? (
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 }}>
            <TouchableOpacity  onPress={() => clickHandle({ type, flag: 'positive', quizId, challengedUserId,id })} style={action ? action === 'positive'? styles.activeButton : styles.disabled : styles.buttonChallenge}>
              <Text style={action ? action === 'positive'? styles.activeButtonText : styles.disabledText : styles.buttonText}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled = {Boolean(action)} onPress={() => clickHandle({ type, flag: 'negative', quizId, challengedUserId,id })} style={action ? action === 'negative'? styles.activeButton : styles.disabled : styles.buttonChallenge}>
              <Text style={action ? action === 'negative'? styles.activeButtonText : styles.disabledText : styles.buttonText}>Reject</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
    </View>
  </View> : (
    <TouchableOpacity onPress={() => clickHandle({ type, eventId })} style={{ flexDirection: 'row', marginTop: 20, borderTopWidth: 1, paddingTop: 20, borderColor: '#474547' }}>
      <ImageBackground style={styles.image}
        imageStyle={{ borderRadius: 50 }} source={{
          uri: avatarUrl
        }}>
      </ImageBackground>
      <View style={{ flex: 4, marginLeft: 10 }} >
        <View>
          <Text style={styles.name}>{text}</Text>
        </View>
        <View >
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>)
)
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 50,
    width: 50,
    height: 50
  },
  buttonText: {
    color: '#C11B17',
    fontWeight: 'bold'
  },
  activeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C11B17',
    height: 43,
    opacity:0.5,
    backgroundColor: 'red',
    marginTop: 10
  },
  disabledText: {
    color: '#fff',
  },
  activeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonChallenge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C11B17',
    height: 43,
    marginTop: 10
  },
  disabled: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    opacity: 0.5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C11B17',
    height: 43,
    marginTop: 10
  },
  name: {
    color: '#fff',
    fontSize: 14
  },
  time: {
    color: '#AAB0BE',
    fontSize: 12
  }
})
export default NotificationCard