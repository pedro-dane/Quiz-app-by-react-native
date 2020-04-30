import React from 'react'
import { StatusBar, View } from 'react-native'

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default AppStatusBar