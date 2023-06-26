import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const handleNavigate=() =>{
    navigation.navigate('Wishlist')
}
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity style={{backgroundColor:'#0096FF',padding:10,margin:10,borderRadius:10}}
      onPress={handleNavigate}>
        <Text style={{fontSize:17}}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})