import React from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'

import { colors } from './src/global/styles'
import RootNavigator from './src/navigation/RootNavigator'
import { SigninContextProvider } from './src/context/authContext'


export default function App() {
  return (
<SigninContextProvider>
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor= {colors.statusbar}
      />
     <RootNavigator/>
    </View>
    </SigninContextProvider>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
  }
})

