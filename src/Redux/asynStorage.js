import { StyleSheet, Text, View ,Button} from 'react-native'
import React ,{useEffect,useState}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../common/styles'
const reduxMain = () => {
    const[item,setItem] = useState('')
    const handleStoreToAsync= async () =>{
        const value ='ABCDEFGH'
        await AsyncStorage.setItem('data123',value)
    }
    useEffect(() =>{
        getAsyncStorageData();
    })
    const getAsyncStorageData= async () =>{
        const value = await AsyncStorage.getItem('data123')
      if (value != null){
        console.log(value)
        setItem(value)
      }
    }
  return (
    <View>
      <Button title='save data to async' onPress={handleStoreToAsync}/>
     <Text>{item}</Text>
    
    </View>
  )
}

export default reduxMain

