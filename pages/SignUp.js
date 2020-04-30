import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import BackgroundImage from '../assets/images/onBoarding/signUp.jpg'
import AuthButton from '../components/AuthButton'
import InputBox from '../components/InputBox'
import DatePicker from 'react-native-datepicker'
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    date: '',
    phone: '',
    dob: '',
    username: ''
  }
  onChangeHandle = (type, text) => {
    this.setState({
      [type]: text
    })
  }
  handleSignup = () => {
    alert(JSON.stringify(this.state))
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
          <KeyboardAvoidingView behavior="height" style={{ flex: 1, justifyContent: "space-around" }}>
            <Text style={styles.headingText} >Create an account</Text>
            <View style={{ marginBottom: '2%', marginTop: '10%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.username,
                type: 'username',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Username',
              }} />
            </View>
            <View style={{ marginBottom: '2%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.email,
                type: 'email',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Email',
              }} />
            </View>
            <View style={{ marginBottom: '2%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.phone,
                type: 'phone',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Phone',
              }} />
            </View>
            <View style={{ marginBottom: '2%', alignItems: 'center' }}>
              <DatePicker

                style={{
                  width: '90%',
                  borderRadius: 30,
                  borderWidth: 0,
                  height: 45,
                  display: 'flex',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }}
                date={this.state.date}
                mode="date"
                placeholder="Select Date Of Birth"
                format="DD-MM-YYYY"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    textAlign: 'left',
                    alignItems: 'flex-start',
                    opacity: 0.6,
                  },
                  dateText: {
                    fontSize: 18,
                    color: 'rgba(255,255,255,1)',
                  },
                  placeholderText: {
                    fontSize: 18,
                    color: 'rgba(255,255,255,1)',
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
                showIcon={false}
              />
            </View>
            <View style={{ marginBottom: '2%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.password,
                type: 'password',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Password',
              }} />
            </View>
          </KeyboardAvoidingView>
          <View style={{ alignItems: 'center', justifyContent: "flex-start", marginBottom: '8%' }}>
            <AuthButton buttonData={{ buttonType: 'login', onPressHandler: this.handleSignup, styleType: 'gradient' }}>Sign Up</AuthButton>
          </View>

          <Text style={[styles.descriptionText]}>
            By clicking sign up you agree to the following terms and conditions without reservation
            </Text>


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
    marginTop: '20%',
    paddingLeft: '10%',
    color: 'white',
    fontSize: 35,
    fontWeight: "bold",
  },
  descriptionText: {
    paddingLeft: '8%',
    paddingRight: '8%',
    color: 'white',
    opacity: 0.3,
    textAlign: 'center',
    marginBottom: '2%',
    fontSize: 13,
  },

})
export default SignUp