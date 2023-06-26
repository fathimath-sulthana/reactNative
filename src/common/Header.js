import { View, Text ,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Header = ({navigation}) => {
    
  return (
    <View style={{justifyContent:'space-between', alignItems:'center',flexDirection:'row',marginTop:20,padding:10}}>
      {/* <Text style={{fontSize:20,color:'#000',textAlign:'center'}}>{props.children}</Text> */}
      <AntDesign name='setting' size={25} color={'#0096FF'} onPress={() =>navigation.navigate('DrawerNav')}/>
      <Image source={require('../assets/images/logoname.jpg')} style={{width:200,height:50}}/>
    </View>
  )
}

export default Header