import { StyleSheet, Text, View } from 'react-native'
import React ,{useState,useEffect}from 'react'
import SecondComponent from './SecondComponent';

const ContextApi = () => {
    const[user,setUser]=useState('abc');
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
      <Text style={{fontSize:30}}></Text>
      <SecondComponent user={user}/>   
    </View>
  )
}


export default ContextApi

const styles = StyleSheet.create({})