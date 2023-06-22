import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'
const Wishlist = ({navigation}) => {
  const handleNavigate =() =>{
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Wishlist</Text>
      <TouchableOpacity style={{
        backgroundColor:'#0096FF',
        padding:15,
        margin:10,
        borderRadius:10
      }} onPress={handleNavigate}>
        <Text style={{fontSize:16,color:'#fff'}}>go back to previous screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Wishlist