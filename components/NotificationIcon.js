import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
class NotificationIcon extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Entypo name={this.props.name} size={this.props.size} color={this.props.color} />
        {this.props.unreadNotificationCounter > 0 && <View style={{ width: 15, height: 15, borderRadius: 10, position: 'relative', bottom: 27, left: 12, backgroundColor: '#FA3E3E', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{this.props.unreadNotificationCounter}</Text>
        </View>}
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('NOTIFICATION ID IS', state.notification.unreadNotificationCounter)
  return { unreadNotificationCounter: state.notification.unreadNotificationCounter }
}
export default connect(mapStateToProps)(NotificationIcon)