import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Home from './Home'
import store from './store'
const reduxMain = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default reduxMain

const styles = StyleSheet.create({})