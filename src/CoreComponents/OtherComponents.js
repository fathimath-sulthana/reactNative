import { Dimensions,StyleSheet, Text, View ,Button,Alert,StatusBar} from 'react-native'
import React from 'react'
import styles from '../common/styles'
import { ActivityIndicator } from 'react-native-paper'
const OtherComponents = () => {
    const {width,height} =Dimensions.get('screen')
     console.warn(width)
    return (
    <View >
        <StatusBar backgroundColor={'green'}/>
      {/* <Text style={styles.textStyle}>Hai</Text>
      <ActivityIndicator size={'small'} color='green'/> */}
      <View style={{width:width,backgroundColor:'green',height:height}}></View>
      <Button title='Alert' onPress={()=>{
        Alert.alert('Alert Title','Alert Content',[
            {
                text:'Cancel',
                onPress:() => console.warn('Cancel pressed'),
            },
            {
                text:'Ok',
                onPress:() => console.warn('Ok pressed'),
            }
        ])
     }}/>
    
    </View>
  )
}

export default OtherComponents

