import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const AuthButton = ({ buttonData: { buttonType, styleType, onPressHandler }, children }) => (
  <TouchableOpacity onPress={() => (onPressHandler(buttonType))} style={[styles.buttonContainer, { marginBottom: '10%' }]}>
    <LinearGradient
      start={[0, 1]} end={[1, 0]}
      colors={styleType === 'gradient' ? ['#eea849', '#f46b45'] : ['white', 'white']}
      style={[styles.buttonContainer, { width: '90%' }]}
    >
      <Text style={styleType === 'normal' ? { color: 'red' } : { color: 'white' }}>{
        children
      }</Text>
    </LinearGradient >
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderRadius: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonInsideText: {},
  loginStyle: {
    backgroundColor: 'white'
  },
  signUpStyle: {
    backgroundColor: '#ff4e00',
  }

})
export default AuthButton