import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import styles from './GlobalStyling';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

export default function App() {
  return (
    <View>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home />
     
    </View>
  )
}
