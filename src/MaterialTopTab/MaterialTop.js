import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../DrawerNavigation/src/Components/Home';
import Settings from '../BottomTabNavigator/src/Components/Settings';
import Profile from '../BottomTabNavigator/src/Components/Profile';
import Cart from '../BottomTabNavigator/src/Components/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Tab = createMaterialTopTabNavigator();
const MaterialTop = () => {
  return (
   
    <Tab.Navigator sceneContainerStyle={{
        backgroundColor:'red'
    }} screenOptions={{
        tabBarInactiveTintColor:'blue',
        tabBarActiveTintColor:'grey',
        tabBarLabelStyle:{
            fontSize:12
        },
        tabBarItemStyle:{
            height:55
        },
        tabBarStyle:{
            backgroundColor:'powderblue'
        },
        
    }}>
   <Tab.Screen name="Home" component={Home} options={{
       tabBarLabel:'Feed',
       tabBarIcon: ({ color }) => (
         <AntDesign name="home" color={color} size={26} />
       ),
     }}/>
   <Tab.Screen name="Setting" component={Settings} options={{
       
       tabBarIcon: ({ color }) => (
         <AntDesign name="setting" color={color} size={26} />
       ),
     }} />
   <Tab.Screen name="Profile" component={Profile} options={{
      
       tabBarIcon: ({ color }) => (
         <AntDesign name="profile" color={color} size={26} />
       ),
     }}/>
   <Tab.Screen name="Cart" component={Cart} options={{
      
       tabBarIcon: ({ color }) => (
         <AntDesign name="shoppingcart" color={color} size={26} />
       ),
     }}/>
 </Tab.Navigator>
  
  )
}

export default MaterialTop