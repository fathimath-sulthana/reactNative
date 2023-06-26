import { View, Text } from 'react-native'
import React from 'react'

const Wishlist = (props,{navigation,route}) => {
  console.warn(props)
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Wishlist</Text>
    </View>
  )
}

export default Wishlist