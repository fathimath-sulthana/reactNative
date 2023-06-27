import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const flatList = () => {
    const data = [
        {
            name:'Abc',
            email:'Abc@abc.com'
        },  {
            name:'xyz',
            email:'Axyz@abc.com'
        },  {
            name:'rst',
            email:'rst@abc.com'
        },  {
            name:'uvw',
            email:'uvw@abc.com'
        },  {
            name:'lmn',
            email:'lmn@abc.com'
        },  {
            name:'opq',
            email:'opq@abc.com'
        },  {
            name:'def',
            email:'Adefc@abc.com'
        },
        {
            name:'Abc',
            email:'Abc@abc.com'
        },  {
            name:'xyz',
            email:'Axyz@abc.com'
        },  {
            name:'rst',
            email:'rst@abc.com'
        },  {
            name:'uvw',
            email:'uvw@abc.com'
        },  {
            name:'lmn',
            email:'lmn@abc.com'
        },  {
            name:'opq',
            email:'opq@abc.com'
        },  {
            name:'def',
            email:'Adefc@abc.com'
        },
    ]
    const Header =() =>{
        return(
            <View style={styles.outerConatiner}>
                <Text style={styles.headText}>DATA LIST</Text>
            </View>
        )
    }
    const Footer =() =>{
        return(
            <View style={styles.outerConatiner}>
                <Text style={styles.headText}>THE END</Text>
            </View>
        )
    }
  return (
    <View>
    <FlatList
    data={data}
    ListHeaderComponent={() => <Header/>}
    ListFooterComponent={() => <Footer/>}
    renderItem={({item}) =>{
        return(
           <View>
             <Text style={styles.textStyle}>{item.name}</Text>
             <Text style={styles.textStyle2}>{item.email}</Text>
            </View>
        )
    }}/>
    </View>
  )
}

export default flatList

const styles = StyleSheet.create({
   textStyle:{
    fontSize:30,
    color:'green'
   },
   textStyle2:{
    fontSize:20,
    color:'red'
   },
   outerConatiner:{
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    margin:15,
    marginTop:20,
    borderColor:'green',
    borderWidth:1,
    borderBottomColor:'red',
    borderBottomWidth:5,
    elevation:50,
    backgroundColor:'white'
   },
   headText:{
    fontSize:30,
    color:'green'
   }
})