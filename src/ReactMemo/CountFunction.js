import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CountFunction = (props) => {
    console.log('#############COUNTERFUNC###############')
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:22,color:'blue'}}>CountFunction{props.count}</Text>
    <TouchableOpacity style={{borderWidth:1,backgroundColor:'green',padding:15}} onPress={props.increment}>
        <Text>Click</Text>
    </TouchableOpacity>
    </View>
  )
}

export default React.memo(CountFunction)

const styles = StyleSheet.create({})