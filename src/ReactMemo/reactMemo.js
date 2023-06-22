import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CountFunction from './CountFunction'
import NameFunction from './NameFunction'

const reactMemo = () => {
    const[name,setName]=useState('Abc')
    const[counter,setCounter]=useState(0)
    const IncremnetCount =() =>{
        setCounter(counter+1)
    }
    console.log('#############PARENT###############')
  return (
    <View>
      <NameFunction name={name}/>
      <Text style={{textAlign:'center',fontSize:30,color:'blue'}}>Parent Function</Text>
      <CountFunction count={counter} increment={IncremnetCount}/>
    </View>
  )
}

export default React.memo(reactMemo)

const styles = StyleSheet.create({})