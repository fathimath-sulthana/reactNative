import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/routers';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const MyDrawer = (props,{state,navigation,description}) => {
    console.warn(state);
    const handleNavigation=name =>{
        navigation.dispatch(CommonActions.navigate(name))
    }
  return (
    <DrawerContentScrollView>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    // <View>
    //     {state.routes.map((item,index) =>{
    //         return(
    //             <TouchableOpacity key={index}
    //             style={{
    //                 padding:15,borderBottomColor:'#000',
    //                 borderBottomWidth:1
    //             }}
    //             onPress={() =>handleNavigation(item.name)}>
    //                 <Text>{item.name}</Text>
    //             </TouchableOpacity>
    //         )
    //     })}
      
    // </View>
  )
}

export default MyDrawer

const styles = StyleSheet.create({})