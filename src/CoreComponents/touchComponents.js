import { StyleSheet, Text, View ,Button,Alert,Switch} from 'react-native'
import React ,{useState}from 'react'
import styles from '../common/styles'
const touchComponents = () => {
    const [active,setActive] = useState(false)
    const onPressHandler=()=>{
        Alert.alert('Button Pressed')
    }
    const toggleSwitch =() =>{
        setActive(!active)
    }
  return (
    <View style={styles.outerContainer}>
     <Button title='Button' color='#841584' 
     onPress={onPressHandler} 
     accessibilityLabel='Press to Show Alert'/>
     <Switch 
     value={active} 
     onValueChange={toggleSwitch} 
     thumbColor={active? '#f4f3f4' : '#f5dd4b'}
     trackColor={{false:'#f5dd4b',true:'#f4f3f4'}}/>
    </View>
  )
}

export default touchComponents

