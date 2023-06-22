import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Home = () => {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <AntDesign name='home' size={35} color={'black'}/>
        <Text style={{fontSize:20,color:'blue'}}>Home</Text>
      </View>
    )
  }

export default Home

const styles = StyleSheet.create({})