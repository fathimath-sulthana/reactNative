import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'
const Settings = ({navigation}) => {
  const handleNavigate=() =>{
    navigation.dispatch(
        CommonActions.reset({
          index:1,
          routes:[
            {
              name:'cart',
            }
          ]
        })
    )
}
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>RESET</Text>
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

export default Settings