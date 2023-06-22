import { View, Text } from 'react-native'
import React from 'react'

const ThirdComponent = props => {
    const {user}=props;
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontSize:30,color:'blue'}}>ThirdComponent= {user}</Text>
    </View>
  )
}

export default ThirdComponent