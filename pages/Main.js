import React, { Component } from 'react'
import { AsyncStorage } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomePage from './WelcomePage'
import SignUp from './SignUp'
import BackButton from '../components/back'
import ForgotPassword from './ForgotPassword'
import CloseButton from '../components/close'
import Login from './Login'
import Home from './Home'
import Profile from './Profile'
import AboutUs from './AboutUs'
import { connect } from 'react-redux'
import { getQuizMetaInfo } from '../actions/Quiz/Quiz'
class Main extends Component {
 
  
  state = {
    authedUser: '',
   
  };
  
 
  componentDidMount() {
    
    this.props.dispatch(getQuizMetaInfo())
    
  }
 

  // getHomePage = () => (
  //   // AsyncStorage.getItem('userToken')
  //   // .then((data) => {
  //   //   if (data != null) {
  //   //     console.log(data);
  //   //     // alert("ffffff");
  //   //     this.setState({
  //   //       authedUser: data
  //   //     })
  //   //     // alert(this.state.authedUser);
  //   //   }
  //   //   // console.log('sssssssssssssssssssssssssssssssssssssss')
  //   //   // console.log(data)
  //   // }),
  //   this.state.authedUser != '' ?  Home  :WelcomePage
  //   // this.state.authedUser ? WelcomePage : Home
  //   // this.state.authedUser ? AboutUs : Home
  // )
  Navigator = createAppContainer(createStackNavigator({
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <CloseButton />
        ),
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    }
  }))

  render() {
    return <this.Navigator />
  }
}
const mapStateToProps = (state) => {
  console.log(state.common, "meta info")
  return {
    metaInfo: state.quiz.metaInfo,
    firstLogin: state.common.firstLogin,
    
  }
}
export default connect(mapStateToProps)(Main)