import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleSheet = () => {
  return (
    <View style={styles.outerConatiner}>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyle}>Hello India</Text>
      <Text style={styles.textStyle}>Hello Guys</Text>
    </View>
  )
}

export default styleSheet

const styles = StyleSheet.create({
   outerConatiner:{
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    margin:15,
    marginTop:20,
    borderColor:'green',
    borderWidth:1,
    borderBottomColor:'red',
    borderBottomWidth:5,
    elevation:50,
    backgroundColor:'white'
   },
   textStyle:{
     fontSize:40,
     textAlign:'left',
     fontWeight:'bold',
     color:'green'
     

   }
})