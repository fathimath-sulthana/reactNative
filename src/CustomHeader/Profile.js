import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
    const handleNavigate=() =>{
        navigation.navigate('DrawerNav')
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:14}}>Profile</Text>
      <TouchableOpacity style={{backgroundColor:'#0096FF',padding:10,margin:10,borderRadius:10}}
      onPress={handleNavigate}>
        <Text style={{fontSize:17}}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile