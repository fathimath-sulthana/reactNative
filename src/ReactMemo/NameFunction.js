import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NameFunction = (props) => {
    console.log('#############NAMEFUNCTION###############')
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:22,color:'blue'}}>NameFunction {props.name}</Text>
    </View>
  )
}

export default React.memo(NameFunction)

const styles = StyleSheet.create({})