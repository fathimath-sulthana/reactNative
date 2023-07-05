import { StyleSheet, Text, View ,Button} from 'react-native'
import React  from 'react'
import { increment } from './action'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state =>state.counter)
  return (
    <View>
        <Text style={{fontSize:25}}>Redux - {counter}</Text>
   <Button title='Increment' 
   onPress={() =>dispatch(increment) }/>
   <Button title='Decrement'/>
    </View>
  )
}

export default Home

