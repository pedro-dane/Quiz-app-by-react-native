import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native'
import BackgroundImage from '../assets/images/onBoarding/welcome.jpg'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import AuthButton from '../components/AuthButton'
class Welcome extends Component {
  authClickHandle = (buttonType) => {
    if (buttonType === 'login') {
      this.props.navigation.navigate('Login')
    }
    else {
      this.props.navigation.navigate('SignUp')
    }
  }
  socialLogin = (type) => {
    if (type === 'facebook') {
      alert('facebook')
    }
    else if (type == 'twitter') {
      alert('twitter')
    }
    else if (type == 'google') {
      alert('google')
    }
  }
  render() {
    console.log('-----this is WelcomPages---------')
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ImageBackground source={BackgroundImage} style={styles.backGroundImage}>
          <Text style={styles.logo}>LOGO</Text>
          <View style={styles.insideContainer}>
            <Text style={styles.headingText}>
              Ace of pubs dummy text
        </Text>
            <Text style={styles.descriptionText}>
              It is possible to manually create a React app, but Facebook has created
              a node  Facebook has created
        </Text>

            <AuthButton buttonData={{ buttonType: 'login', onPressHandler: this.authClickHandle, styleType: 'normal' }}>Login</AuthButton>
            <AuthButton buttonData={{ buttonType: "signUp", onPressHandler: this.authClickHandle, styleType: 'gradient' }}>Sign Up</AuthButton>

            <Text style={{ color: 'gray', fontSize: 14, paddingTop: 10 }}>Or log in with</Text>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity onPress={() => this.socialLogin('facebook')}>
                <FontAwesome name="facebook-f" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.socialLogin('twitter')}>
                <Ionicons name="logo-twitter" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.socialLogin('google')}>
                <Ionicons name="logo-googleplus" size={32} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View >

    )
  }
}
const styles = StyleSheet.create({
  insideContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: '20%',
    alignItems: "center",
  },
  backGroundImage: {
    zIndex: -1,
    flex: 1,
    opacity: 0.9
  },
  logo: {
    marginTop: 60,
    fontSize: 35,
    alignSelf: "center",
    color: "white"
  },
  headingText: {
    opacity: 1,
    fontSize: 45,
    marginLeft: 16,
    zIndex: 1,
    fontWeight: "bold",
    color: 'white'
  },
  socialIconsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    width: '40%'
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    margin: 20,
    marginTop: 15,
    marginBottom: 30,
  },
})
export default Welcome