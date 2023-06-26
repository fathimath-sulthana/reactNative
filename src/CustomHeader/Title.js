import { View, Text ,Image} from 'react-native'
import React from 'react'

const Title = props => {
    console.warn(props)
  return (
    <View style={{flex:1,justifyContent:'center',}}>
      {/* <Text style={{fontSize:20,color:'#000',textAlign:'center'}}>{props.children}</Text> */}
      <Image source={require('../assets/images/logoname.jpg')} style={{width:200,height:50}}/>
    </View>
  )
}

export default Title