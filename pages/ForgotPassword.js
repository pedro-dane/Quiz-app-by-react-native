import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import BackgroundImage from '../assets/images/onBoarding/forgotPassword.jpg'
import AuthButton from '../components/AuthButton'
import InputBox from '../components/InputBox'
import { TouchableOpacity } from 'react-native-gesture-handler';
class ForgotPassword extends Component {
  state = {
    email: '',
    password: '',
    phone: '',
    dob: '',
    username: ''
  }
  onChangeHandle = (type, text) => {
    this.setState({
      [type]: text
    })
  }
  handleForgotPassword = () => {
    alert('forgot password handler')
  }
  handleLogin = () => {
    // alert(JSON.stringify(this.state))
    this.setState({
      email: '',
      password: '',
      phone: '',
      dob: '',
      username: ''
    })
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ImageBackground source={BackgroundImage} style={styles.backGroundImage}>
          <KeyboardAvoidingView behavior="height" style={{ justifyContent: "center" }}>
            <Text style={styles.headingText} >Forgot password</Text>
            <Text style={styles.descriptionText} >
              Please enter your email address. You will receive a link to create a new password via email.
            </Text>

            <View style={{ marginTop: '15%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.email,
                type: 'email',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Email',
              }} />
            </View>
          </KeyboardAvoidingView>
          <View style={{ alignItems: 'center', justifyContent: "flex-start", marginTop: '8%' }}>
            <AuthButton buttonData={{ buttonType: 'login', onPressHandler: this.handleLogin, styleType: 'gradient' }}>Send</AuthButton>
          </View>
        </ImageBackground>
      </View >

    )
  }
}
const styles = StyleSheet.create({
  backGroundImage: {
    zIndex: -1,
    flex: 1,
    opacity: 0.9
  },

  headingText: {
    marginTop: '35%',
    paddingLeft: '10%',
    color: 'white',
    fontSize: 35,
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: '5%',
    paddingLeft: '10%',
    paddingRight: '8%',
    color: 'white',
    textAlign: 'justify',
    fontSize: 16,
  },

})
export default ForgotPassword