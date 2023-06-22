import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './src/Components/Home';
import Notification from './src/Components/Notification';
import Settings from './src/Components/Settings';
import Profile from './src/Components/Profile'
import Wishlist from './src/Components/Wishlist'
import Orders from './src/Components/Orders'
import Cart from './src/Components/Cart'
const MyTab=createBottomTabNavigator();
const MyDrawerTab=createDrawerNavigator();
const Main = () => {
    const MyDrawer =() =>{
        return(
           <MyDrawerTab.Navigator screenOptions={{headerShown:false}}>
             <MyDrawerTab.Screen name='Home' component={Home}/>
            <MyDrawerTab.Screen name='Profile' component={Profile}/>
            <MyDrawerTab.Screen name='Wishlist' component={Wishlist}/>
            <MyDrawerTab.Screen name='Orders' component={Orders}/>
           </MyDrawerTab.Navigator>
        )
    }
  return (
    <NavigationContainer>
        <MyTab.Navigator>
        <MyTab.Screen 
        name='MyDrawer' 
        component={MyDrawer}
        options={{
            headerShown:false,
            title:'Home'
        }}/>
        <MyTab.Screen name='Notification' component={Notification}/>
        <MyTab.Screen name='Settings' component={Settings}/>
        <MyTab.Screen name='Cart' component={Cart}/>
    </MyTab.Navigator>
    </NavigationContainer>
  )
}

export default Main