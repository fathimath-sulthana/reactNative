import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createAnimatedPropAdapter } from 'react-native-reanimated'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
const MyDrawer = createDrawerNavigator();
import Home from './src/Components/Home';
import Notification from './src/Components/Notification';

const main = () => {
    return (
      <NavigationContainer>
        <MyDrawer.Navigator>
            <MyDrawer.Screen name='Home'component={Home}/>
            <MyDrawer.Screen name='Notification'component={Notification}/>
        </MyDrawer.Navigator>
      </NavigationContainer>
    )
  }
  
export default main

const styles = StyleSheet.create({})