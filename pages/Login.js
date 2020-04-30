import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet,AsyncStorage } from 'react-native'
import BackgroundImage from '../assets/images/onBoarding/login.jpg'
import AuthButton from '../components/AuthButton'
import InputBox from '../components/InputBox'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginURL from "../api/config";
import { connect } from "react-redux";
import { logins } from '../actions/Auth/Auth';
import apiHeaders from '../api/apiUtils/apiHeaders'
import { saveUserToken } from '../actions/Auth/Toke';
import config from '../api/config'
import axios from 'axios'



class Login extends Component {
  state = {
    email: '',
    password: '',
    user:''
  }
  onChangeHandle = (type, text) => {
    this.setState({
      [type]: text
    })
  }
  handleForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword')
  }
  handleLogin =  () => {
    const data = {
      "email": this.state.email,
      "password": this.state.password
    };
    // axios.post(config.auth.login, data)
    // .then((response) =>{
    //   alert(response['data']['accessToken'])
    //   this.props.navigation.navigate('Home',{ 'Tok':response['data']['accessToken'] } );
    // })
    // .catch((err) => {
    //   alert(err, ' error')
    // })

    axios.post('https://192.168.110.249:8000/api/auth/login', data)
    .then((response) =>{
      console.log("-------------------------------------------")
      console.log(response)
      console.log("-------------------------------------------")
      // this.props.navigation.navigate('Home',{ 'Tok':response['data']['accessToken'] } );
    })
    .catch((err) => {
      alert(err, ' error')
    })
  //  this.props.dispatch(logins(data))
    //  await this.props.navigation.navigate('Home');
    // AsyncStorage.setItem('user', 'dd');
    // setTimeout(async ()=>{
    //   var us=null;
    //   us =  (await AsyncStorage.getItem('userToken')).toString();
    //   alert(us)
 
    // }, 1000); 

    //  this.props.dispatch(logins(data));
    // this.props.saveUserToken(data)
    //         .then(() => {
    //             this.props.navigation.navigate('Home');
    //         })
    //         .catch(error => {
    //             this.setState({ error })
    //         })
        
    };
    
    // alert(us)
    // dispatch(us = (await AsyncStorage.getItem('userToken')).toString())
     
    //  alert(us)
    // if (us!=null){
    //   await this.props.navigation.navigate('Home');
    // }
   
  
   
    //  setTimeout(this.props.navigation.navigate('Home'),5000)
    
   
   

  //  temp (params) {
  //   var us=null;
  //   us =  AsyncStorage.getItem('userToken').toString()
  //   alert("fwef")
  // }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ImageBackground source={BackgroundImage} style={styles.backGroundImage}>
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <Text style={styles.headingText} >Welcome Back </Text>
            <Text style={styles.descriptionText} >Login to your account </Text>

            <View style={{ marginBottom: '2%', alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.email,
                type: 'email',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Email',
              }} />
            </View>
            <View style={{ paddingBottom: 20, alignItems: 'center' }}>
              <InputBox inputData={{
                value: this.state.password,
                type: 'password',
                onChangeHandle: this.onChangeHandle,
                placeholder: 'Password',
              }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: "flex-start", marginBottom: '8%' }}>
              <AuthButton buttonData={{ buttonType: 'login', onPressHandler: this.handleLogin, styleType: 'gradient' }}>Login</AuthButton>
            </View>
          </View>
          <TouchableOpacity style={{ paddingBottom: '20%' }} onPress={this.handleForgotPassword}>
            <Text style={[styles.descriptionText, { paddingLeft: '25%' }]}>Forgot your password?</Text>
          </TouchableOpacity>

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
    paddingLeft: '10%',
    color: 'white',
    opacity: 0.8,
    fontSize: 16,
    marginLeft: 1,
  },

})
// function mapStateToProps(state) {
//   return {
//       log:state.auth
//   };
// }

const mapStateToProps = state => ({
    log:state.auth
});


export default connect()(Login);

