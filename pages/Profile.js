// import React, { Component } from 'react'
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import ProfileStatus from '../components/ProfileStatus'
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { connect } from 'react-redux'
// import { fetchUserProfile } from '../actions/Profile/Profile'
// class Profile extends Component {
//   state = {
//     profileState: {
//       level: 'Level-5',
//       points: '300',
//       experience: '300 / 900'
//     },
//     userData: {
//       name: 'Shivam Sharma',
//       url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
//     },
//     pushNotification: false,
//     achievements: [
//       {
//         id: '-1',
//         url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
//       },
//       {
//         id: '0',
//         url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
//       },
//       {
//         id: '1',
//         url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
//       },
//       {
//         id: '2',
//         url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
//       },
//       {
//         id: '21',
//         url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
//       },
//     ],
//   }
//   handlePushNotification = () => {
//     this.setState({
//       pushNotification: !this.state.pushNotification
//     })
//   }
//   handleFriends = () => {
//     this.props.navigation.navigate('AddFriend')
//   }
//   handleRedeemPoints = () => {
//     alert('handle redeem points')
//   }
//   editProfile = () => {
//     this.props.navigation.navigate('EditProfile')
//   }
//   componentDidMount() {
//     this.props.navigation.addListener('didFocus', () => {
//       this.props.dispatch(fetchUserProfile())
//     })
//   }
//   render() {
//     return (
//       this.props.userProfile ? <View style={{ flex: 1 }}>
//         <View style={styles.header}>
//           <Image style={{ width: 80, height: 80, borderRadius: 80 }} source={{ uri: this.props.userProfile.userData.url }} />
//           <View style={{ marginLeft: 20 }}>
//             <Text style={{ fontSize: 25, color: "white" }}>{this.props.userProfile.userData.name}</Text>
//             <View style={{ position: 'relative', left: -20, marginTop: 10 }}>
//               <ProfileStatus textColor="white" points={this.props.userProfile.profileState.points} level={this.props.userProfile.profileState.level} experience={this.props.userProfile.profileState.experience} />
//             </View>
//           </View>
//           <TouchableOpacity style={{ position: 'relative', top: -60, left: -10, zIndex: 20 }} onPress={this.editProfile}>
//             <AntDesign name="edit" color="red" size={20} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.achievement}>
//           <Text style={{ flex: 1, fontSize: 18, marginTop: 20, marginLeft: 10, opacity: 0.6 }}>Achievements</Text>
//           <View style={styles.achievementIcons}>
//             {
//               this.props.userProfile.achievements.map(achievement => (
//                 <Image key={achievement.id} style={{ width: 60, height: 60, borderRadius: 60 }} source={{ uri: achievement.url }} />
//               ))
//             }
//           </View>
//         </View>
//         <View style={styles.main}>
//           <TouchableOpacity onPress={this.handlePushNotification} style={styles.mainContent}>
//             <Text style={styles.mainText}>Push Notifications</Text>
//             {this.props.userProfile.pushNotification && <FontAwesome style={styles.mainIcon} name="toggle-on" color="green" size={32} />}
//             {!this.props.userProfile.pushNotification && <FontAwesome style={styles.mainIcon} name="toggle-off" color="red" size={32} />}
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.handleFriends} style={styles.mainContent}>
//             <Text style={styles.mainText}>Friends</Text>
//             <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.handleRedeemPoints} style={styles.mainContent}>
//             <Text style={styles.mainText}>Redeem Points</Text>
//             <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
//           </TouchableOpacity>
//         </View>
//       </View> : <View></View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   header: {
//     marginTop: 60,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginLeft: 15,
//     alignItems: 'center'
//   },
//   mainContent: {
//     justifyContent: 'space-between',
//     flex: 1,
//     flexDirection: 'row'
//   },
//   achievement: {
//     flex: 1,
//     borderRadius: 17,
//     marginTop: 30,
//     paddingBottom: 10,
//     backgroundColor: '#fff',
//     margin: 16
//   },
//   achievementIcons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     flex: 2,
//     flexDirection: 'row',
//   },
//   mainText: {
//     color: '#fff',
//     fontSize: 19,
//     marginLeft: 20
//   },
//   mainIcon: {
//     marginRight: 30
//   },
//   main: {
//     flex: 2,
//     width: '100%',
//     marginTop: 30,
//   }
// })
// const mapStateToProps = (state) => (
//   {
//     userProfile: state.profile.userProfile
//   }
// )
// export default connect(mapStateToProps)(Profile)





import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import ProfileStatus from '../components/ProfileStatus'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { fetchUserProfile } from '../actions/Profile/Profile'
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';

class Profile extends Component {
  state = {
    modalVisible:false,
    profileState: {
      level: 'Level-5',
      points: '300',
      experience: '300 / 900',
     
    },
    userData: {
      name: 'Shivam Sharma',
      url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
    },
    pushNotification: false,
    achievements: [
      {
        id: '-1',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
      },
      {
        id: '0',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
      },
      {
        id: '1',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
      },
      {
        id: '2',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
      },
      {
        id: '21',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg'
      },
    ],
  }
  handlePushNotification = () => {
    this.setState({
      pushNotification: !this.state.pushNotification
    })
  }
  handleFriends = () => {
    this.props.navigation.navigate('AddFriend')
  }
  handleRedeemPoints = () => {
    alert('handle redeem points')
  }
  editProfile = () => {
    this.props.navigation.navigate('EditProfile')
  }
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.dispatch(fetchUserProfile())
    })
  }
  render() {
    return (
      this.state ? <View style={{ flex: 1 }}>
        <Modal
          width={0.9}
          visible={this.state.modalVisible}
          rounded
          actionsBordered
          onTouchOutside={() => {
            this.setState({ modalVisible: false });
          }}
          >
          <ModalContent
            style={{ backgroundColor: '#fff' }}
          >
           <View>
             <View style={{ width:'98%',height:150,backgroundColor:'#CCCACA',alignSelf:'center'}} ></View>
             <View>
               <TouchableOpacity style={{ width:'70%',height:50, backgroundColor:'#FF8C00',alignSelf:'center',alignItems:'center',justifyContent:'center',
               borderRadius:10,marginTop:10 }} >
                 <Text style={{color:'white',fontWeight:'bold'}} >Submit</Text>
               </TouchableOpacity>
             </View>
             <View>
             <TouchableOpacity style={{ width:'70%',height:50, backgroundColor:'#FF8C00',alignSelf:'center',alignItems:'center',justifyContent:'center',
               borderRadius:10,marginTop:10 }}>
                  <Text style={{color:'white',fontWeight:'bold'}}>Call us</Text>
             </TouchableOpacity>
             </View>
           </View>
          </ModalContent>
        </Modal>     
        <View style={styles.header}>
          <Image style={{ width: 80, height: 80, borderRadius: 80 }} source={{ uri: this.state.userData.url }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 25, color: "white" }}>{this.state.userData.name}</Text>
            <View style={{ position: 'relative', left: -20, marginTop: 10 }}>
              <ProfileStatus textColor="white" points={this.state.profileState.points} level={this.state.profileState.level} experience={this.state.profileState.experience} />
            </View>
          </View>
          <TouchableOpacity style={{ position: 'relative', top: -60, left: -10, zIndex: 20 }} onPress={this.editProfile}>
            <AntDesign name="edit" color="red" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.achievement}>
          <Text style={{ flex: 1, fontSize: 18, marginTop: 20, marginLeft: 10, opacity: 0.6 }}>Achievements</Text>
          <View style={styles.achievementIcons}>
            {
              this.state.achievements.map(achievement => (
                <Image key={achievement.id} style={{ width: 60, height: 60, borderRadius: 60 }} source={{ uri: achievement.url }} />
              ))
            }
          </View>
        </View>
        <View style={styles.main}>
          <ScrollView>
            <TouchableOpacity onPress={this.handlePushNotification} style={styles.mainContent}>
              <Text style={styles.mainText}>Push Notifications</Text>
              {this.state.pushNotification && <FontAwesome style={styles.mainIcon} name="toggle-on" color="green" size={32} />}
              {!this.state.pushNotification && <FontAwesome style={styles.mainIcon} name="toggle-off" color="red" size={32} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleFriends} style={styles.mainContent}>
              <Text style={styles.mainText}>Friends</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RedeemPoints')} style={styles.mainContent}>
              <Text style={styles.mainText}>Redeem Points</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleRedeemPoints} style={styles.mainContent}>
              <Text style={styles.mainText}>Sponsors</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutUs')} style={styles.mainContent}>
              <Text style={styles.mainText}>About Us</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {
            this.setState({ modalVisible: true }); }} style={styles.mainContent}>
              <Text style={styles.mainText}>Contact Us</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
             <TouchableOpacity  onPress={() => {
            this.setState({ modalVisible: true }); }} style={styles.mainContent}>
              <Text style={styles.mainText}>Contact Us</Text>
              <AntDesign style={styles.mainIcon} name="right" color="#fff" size={26} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View> : <View></View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    alignItems: 'center'
  },
  mainContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    borderBottomColor: '#f00'
  },
  achievement: {
    flex: 1,
    borderRadius: 17,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: '#fff',
    margin: 16
  },
  achievementIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 2,
    flexDirection: 'row',
  },
  mainText: {
    color: '#fff',
    fontSize: 19,
    marginLeft: 20
  },
  mainIcon: {
    marginRight: 30
  },
  main: {
    flex: 2,
    width: '100%',
    marginTop: 30,
  }
})
const mapStateToProps = (state) => (
  {
    userProfile: state.profile.userProfile
  }
)
export default connect(mapStateToProps)(Profile)