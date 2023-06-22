import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const IfElseCondition = () => {
    const[user,setUser]=useState('');
    const[age,setAge]=useState('');
    useEffect(() =>{
        setTimeout(() =>{
            setUser('Hai');
            setAge(10)
        },9000)
    },[])
  
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontSize:30}}>Hello</Text>
      <Text style={{fontSize:30}}>
        {user==='' ?'No user':age === 20 ?'0'+ user: age + '' + user}
        </Text>
        <Text style={{fontSize:30}}>{user ?? 'undefined'}</Text>
    </View>
  )
}

export default IfElseCondition

const styles = StyleSheet.create({})