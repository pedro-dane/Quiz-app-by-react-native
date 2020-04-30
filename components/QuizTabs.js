import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const QuizTab = ({ activeTab, tabChangeHandler }) => (
  // <View style={{flex:1, flexDirection:'row', marginTop: 10, backgroundColor: '#333b48' }}>

  //   <TouchableOpacity onPress={() => tabChangeHandler('onlineQuiz')} style={[styles.tabs, activeTab === 'onlineQuiz' ? styles.tabActive : styles.tabInActive]}>
  //     <Text>Online Quiz</Text>
  //   </TouchableOpacity>
  //   <TouchableOpacity onPress={() => tabChangeHandler('liveQuiz')} style={[styles.tabs, activeTab === 'liveQuiz' ? styles.tabActive : styles.tabInActive]}>
  //     <Ionicons name="md-lock" color="#fff"/>
  //     <Text style={[ {marginLeft: 10}]}>Live Quiz</Text>
  //   </TouchableOpacity>
  // </View>

  <View style={{ width:'95%',height: 48, flexDirection: 'row', borderRadius: 7, backgroundColor: '#333b48'}}>
    <TouchableOpacity onPress={() => tabChangeHandler('onlineQuiz')} style={activeTab === 'onlineQuiz' ? styles.active_tab_style : styles.inactive_tab_style}>
      <Text style={activeTab === 'onlineQuiz' ? styles.active_tab_text_style:styles.inactive_tab_text_style}>Online Quiz</Text>
      {activeTab === 'onlineQuiz'?<View style={styles.yellow_view_style}></View>:null}
    </TouchableOpacity>
    <TouchableOpacity onPress={() => tabChangeHandler('liveQuiz')} style={activeTab === 'liveQuiz' ? styles.active_tab_style : styles.inactive_tab_style}>
      <Text style={activeTab === 'liveQuiz' ? styles.active_tab_text_style:styles.inactive_tab_text_style}>Live</Text>
      {activeTab === 'liveQuiz'?<View style={styles.yellow_view_style}></View>:null}
    </TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    width: '50%',
    height: 40,
    borderRightWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  tabActive: {
    backgroundColor: '#fff',

  },
  tabInActive: {
    backgroundColor: '#333b48'
  },
  active_tab_style: {
    backgroundColor: '#ffffff',
    borderRadius: 7,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:48,
  },
  inactive_tab_style: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height:48,
    
  },
yellow_view_style:{
  width:45,
  height:2,
  position:'absolute',
  bottom:0,
  backgroundColor:'#ff9900'
},
active_tab_text_style:{
  color:'#000',
  alignContent:'center',
  opacity:0.8
},
inactive_tab_text_style:{
  color:'#fff',
  alignContent:'center',
  opacity:0.5
}
})
export default QuizTab