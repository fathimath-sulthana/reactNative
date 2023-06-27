import { StyleSheet, Text, View ,SectionList} from 'react-native'
import React from 'react'

const sectionList = () => {
    const DATA =[
        {
            title:"Main Dishes",
            data:["Pizza","Burger","Risotto"]
        },
        {
            title:"Sides",
            data:["French Fries","Onion Rings","Fried Shrimps"]
        },
        {
            title:"Desserts",
            data:["Cheese Cake","Ice cream","Risotto"]
        },
        {
            title:"Drinks",
            data:["Water","Coke","Fresh Juice"]
        }
    ]
  return (
    <View>
     <SectionList
     sections={DATA}
     keyExtractor={(item,index) => item + index}
     renderSectionHeader={({section:{title}}) =>(
        <Text style={styles.header}>{title}</Text>
     )}
     renderItem={({item}) =>{
        return(
            <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
        </View>
        )
     }
       
     }/>
    </View>
  )
}

export default sectionList

const styles = StyleSheet.create({
     header:{
        fontSize:25
     },
     item:{
        backgroundColor:'#0075ff',
        padding:30,
        margin:10
     },

})