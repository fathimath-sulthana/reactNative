import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const textInput = () => {
    const inputText =text =>{
        console.warn(text)
    }
    const onEndEditing =response =>{
      console.warn(response.nativeEvent.text)
  }
  const onBlur =text =>{
    console.warn(text)
}
const onPressIn =event =>{
  console.warn(event.nativeEvent,'onPressIn')
}
  return (
    <View style={{flex:1}} >
     <TextInput
     placeholder='enter name'
     keyboardType='email-address'
     onEndEditing={onEndEditing}
     onChangeText={inputText}
     onBlur={onBlur}
     onPressIn={onPressIn}
    // multiline={true}
     numberOfLines={3}
     maxLength={25}
     placeholderTextColor={'red'}
     returnKeyLabel='Hai'
     returnKeyType='send'
     />
    </View>
  )
}

export default textInput

const styles = StyleSheet.create({})