import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../DrawerNavigation/src/Components/Home';
import Profile from '../BottomTabNavigator/src/Components/Profile';
import Settings from '../BottomTabNavigator/src/Components/Settings';
import Cart from '../BottomTabNavigator/src/Components/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialTop from '../MaterialTopTab/MaterialTop';
const Tab = createMaterialBottomTabNavigator();
const MaterialTab = () => {
  return (
    
      <NavigationContainer>
       <Tab.Navigator>
      <Tab.Screen name="Home" component={MaterialTop} options={{
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
         tabBarBadge: 5,
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
      </NavigationContainer>
   
  )
}

export default MaterialTab

