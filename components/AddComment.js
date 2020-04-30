import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
class AddComment extends Component{
  state = {
    comment: ''
  }
  onPressHandler = () => {
    this.props.clickHandle(this.state.comment)
    this.setState({
      comment: ''
    })
    this.refs['commentInput'].blur()
  }
  render(){
    return (
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
          ref="commentInput"
          style={styles.inputField}
          placeholder="Write a comment..."
          value={this.state.comment}
          onChangeText={(text) => {
            this.setState({comment: text}) 
          }}
        />
        <TouchableOpacity onPress={this.onPressHandler} style={{flex:1, justifyContent: 'flex-end', zIndex:1,}}>
          <Ionicons name="md-send" color="#FF1493" size={26}/>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputField: {
    backgroundColor: '#fff',
    marginRight: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#EAEAEC',
    borderRadius: 25,
    flex:8,
    paddingLeft: '5%',
    fontSize: 19,
    height: 35
  }
})
export default AddComment