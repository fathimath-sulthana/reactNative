import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Notification from './Notification'
import Settings from './Settings'
import Wishlist from './Wishlist'
import Profile from './Profile'
import Cart from './Cart'
const Stack = createStackNavigator()
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='Wishlist' component={Wishlist}/>
        <Stack.Screen name='profile' component={Profile}/>
        <Stack.Screen name='cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;