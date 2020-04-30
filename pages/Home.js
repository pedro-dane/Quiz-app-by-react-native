import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import AddFriend from './AddFriend'
import QuizQuestions from './QuizQuestions'
import Discover from './Discover'
import Quiz from './Quiz'
import BackButton from '../components/back'
import CloseButton from '../components/close'
import NotificationIcon from '../components/NotificationIcon'
import Notification from './Notification'
import Profile from './Profile'
import ViewAll from './ViewAllDiscover'
import QuizScore from './QuizScore'
import InviteFriends from './InviteFriends'
import LeaderBoard from './LeaderBoard';
import EventDetails from './EventDetails'
import Filter from './Filter'
import EditProfile from './EditProfile'
import RedeemPoints from './RedeemPoints'
import Redemptionhistory from './Redemptionhistory'
import Win from './Win'
import AboutUs from './AboutUs';

import { connect } from 'react-redux'
import { checkNotification } from '../actions/Notification/Notification'

import SelectCategories from './SelectCategories';

class MainComponent extends Component {
  state = {
    firstLogin: true
  }
  constructor(props){
    super(props)
   
  }
  componentWillMount(){
    let dd= this.props.navigation.getParam("Tok")
    alert(dd)
    AsyncStorage.setItem('userToken',dd)
  }
  timer = null
  TabNavigator = createBottomTabNavigator({
    Discover: {
      screen: Discover
    },
    Leaderboard: LeaderBoard,
    Quiz: Quiz,
    Notification: Notification,
    Profile: Profile
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent
        let iconName;
        if (routeName === 'Discover') {
          IconComponent = Ionicons;
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Notification') {
          IconComponent = NotificationIcon
          iconName = 'notification'
        }
        else if (routeName === 'Quiz') {
          IconComponent = Ionicons;
          iconName = `ios-options`;
        }
        else if (routeName === 'Leaderboard') {
          IconComponent = Feather;
          iconName = `tv`;
        }
        else if (routeName === 'Profile') {
          IconComponent = Ionicons;
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} notificationCount={this.props.unreadNotificationCounter} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#F76A63',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#20242F',
        borderTopColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        alignitems: 'flex-start'
      }
    },
  });

  Home = createAppContainer(createStackNavigator({
    Home: {
      screen: this.TabNavigator,
      navigationOptions: {
        header: null,
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        header: null,
      }
    },
    ViewAll: {
      screen: ViewAll,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    Redemptionhistory: {
      screen: Redemptionhistory,
      navigationOptions: {
        header: null,
      }
    },
    EventDetails: {
      screen: EventDetails,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    RedeemPoints: {
      screen: RedeemPoints,
      navigationOptions: {
        header: null,
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    Filter: {
      screen: Filter,
      navigationOptions: {
        header: null,
      }
    },
    InviteFriends: {
      screen: InviteFriends,
      navigationOptions: {
        header: null,
      }
    },
    AddFriend: {
      screen: AddFriend,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    // InviteFriends: {
    //   screen: InviteFriends,
    //   navigationOptions: {
    //     header: null,
    //   }
    // },
    QuizScore: {
      screen: QuizScore,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    QuizQuestions: {
      screen: QuizQuestions,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    },
    QuizScore: {
      screen: QuizScore,
      navigationOptions: {
        headerTransparent: true,
        header: null
      }
    },
    Win: {
      screen: Win,
      navigationOptions: {
        headerTransparent: true,
        headerBackImage: (
          <BackButton />
        ),
      }
    }
  }, {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#20242F' }
  }))

  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(checkNotification())
    }, 10000000000)
  }
  render() {
    return <this.Home />
  }
}

export default connect()(MainComponent)