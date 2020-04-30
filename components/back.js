import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native'
const back = () => (
  <MaterialCommunityIcons name="keyboard-backspace" color="white" style={styles.backArrow} />
)

const styles = StyleSheet.create({
  backArrow: {
    fontSize: 30,
    marginTop: '10%',
    marginLeft: 7,
    marginRight: 10,
  },
})

export default back