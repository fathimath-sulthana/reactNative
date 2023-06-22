import { View, Text } from 'react-native'
import React from 'react'
import ThirdComponent from './ThirdComponent'

const SecondComponent = props => {
    const {user}=props
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontSize:25,color:'red'}}>SecondComponent ={user}</Text>
      <ThirdComponent user={user}/>
    </View>
  )
}

export default SecondComponent