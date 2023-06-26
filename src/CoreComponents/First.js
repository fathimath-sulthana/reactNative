import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'

const First = () => {
    const text = 'Hello';
    const [text1,setText1] =useState(`Core ${text}`)
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30}}>{text1}</Text>
      <Image source={require('../assets/images/logoname.jpg')}/>
    </View>
  )
}

export default First

const styles = StyleSheet.create({})