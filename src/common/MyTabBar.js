import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/routers'
import AntDesign from 'react-native-vector-icons/AntDesign'
const MyTabBar =props => {
  const handleNavigation=name =>{
    props.navigation.dispatch(
      CommonActions.navigate(name)
    )
  }
    console.warn(props.state.index)
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',height:60,backgroundColor:'#eeee',elevation:5}}>
      {props.state.routes.map((route,index) =>{
        const isFocused =props.state.index === index;
        const icon =route.name === 'Home'? (<AntDesign name='home' size={20} color={isFocused?'#0096FF' :'#000'} />
         ) :route.name === 'Cart'? (
                  <AntDesign name='shoppingcart' size={20} color={isFocused?'#0096FF' :'#000'} />
       ) :route.name === 'Wishlist'? (
                  <AntDesign name='hearto' size={20} color={isFocused?'#0096FF' :'#000'} />
        ) :null
        console.warn(route);
        return(
          <TouchableOpacity key={index} accessibilityRole='button' onPress={() =>handleNavigation(route.name)}
          style={{justifyContent:'center',alignItems:'center'}}>
         {icon}
          <Text style={{color:isFocused?'#0096FF' :'#000',fontSize:14}}>{route.name}</Text>
        </TouchableOpacity>
        )
      })}
    </View>
  )
}
export default MyTabBar;