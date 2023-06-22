import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const[renderCount,setRender]=useState(0);
    const[input,setInput]=useState('')
    const inputRef=useRef(null);
    const renderRef=useRef(1);
    const handleFocus =() =>{
        inputRef.current.focus();
      
       
    }
   useEffect(() =>{
   renderRef.current = renderRef.current + 1;
   })
  return (
    <View style={{marginTop:20}}>
      <Text
      style={{
        marginTop:10,
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        color:'blue'
      }}>UseRef - {input}</Text>
      <TouchableOpacity onPress={() =>setRender(renderCount + 1)}>
        <Text>times component rendered {renderRef.current}</Text>
      </TouchableOpacity>
      <TextInput
      
      ref={inputRef}
      style={{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        margin:10
      }}
      onChangeText={(text) =>setInput(text)}/>
      <TouchableOpacity onPress={handleFocus}>
        <Text>Focus into textinput</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseRef

const styles = StyleSheet.create({})