import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions ,StackActions} from '@react-navigation/native'
const Notification = ({navigation,route}) => {
  console.warn(route);
    const handleNavigate=() =>{
        navigation.dispatch(StackActions.push('Wishlist',{profileId:'1234'}))
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>{route.name}</Text>
      <Text>{route?.params?.user?? ''}</Text>
      <TouchableOpacity style={{
        backgroundColor:'#0096FF',
        padding:15,
        margin:10,
        borderRadius:10
      }} onPress={handleNavigate}>
        <Text style={{fontSize:16,color:'#fff'}}>navigate to next screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notification