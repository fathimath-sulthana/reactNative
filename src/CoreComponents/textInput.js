import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const textInput = () => {
    const inputText =text =>{
        console.warn(text)
    }
  return (
    <View style={{flex:1}} >
     <TextInput
     placeholder='enter name'
     keyboardType='email-address'
     onChangeText={inputText}
     multiline={true}
     numberOfLines={3}
     maxLength={25}
     />
    </View>
  )
}

export default textInput

const styles = StyleSheet.create({})