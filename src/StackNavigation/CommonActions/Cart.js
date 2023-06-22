import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'
const Cart = ({navigation,route}) => {
  const handleNavigate=() =>{
    navigation.dispatch(CommonActions.setParams({notify:'hello'}))
  }
  console.warn(route);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Cart</Text>
      <TouchableOpacity style={{
        backgroundColor:'#0096FF',
        padding:15,
        margin:10,
        borderRadius:10
      }} onPress={handleNavigate}>
        <Text style={{fontSize:16,color:'#fff'}}>setParams</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart
