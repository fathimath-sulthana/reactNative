///// useMemo =>it's ahook used to improve perfomance of components.
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[countOne,setCountOne]=useState(0)
    const[countTwo,setCountTwo]=useState(0)

    const handleCountOne =()=>{
        setCountOne(countOne+1);
    }
    const handleCountTwo=()=>{
        setCountTwo(countTwo+2)
    }
   // useMemo(function,[])

    const isEven = useMemo(()=>{
           let i =0;
           while(i<20000){
            i++;
           }
           return countOne % 2 ===0;
    },[countOne])
    
  return (
    <View style={{marginTop:20}}>
         <Text 
      style={{
        marginTop:10,
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        color:'blue'}}>
            UseMemo
            </Text>
            <Text style={{color:'green',fontSize:25,margin:25}}>
               {countOne} - {isEven ? 'Even' : 'Odd'}
            </Text>
      <TouchableOpacity style={{padding:10,margin:25,backgroundColor:'red'}} onPress={handleCountOne}>
           <Text style={{color:'white'}}>add count one</Text>
      </TouchableOpacity>
      <Text style={{color:'green',fontSize:25,margin:25}}>{countTwo}</Text>
      <TouchableOpacity style={{padding:10,margin:25,backgroundColor:'red'}} onPress={handleCountTwo}>
           <Text style={{color:'white'}}>add count two</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseMemo