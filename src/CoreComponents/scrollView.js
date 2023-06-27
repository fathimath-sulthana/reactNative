import { RefreshControl,StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import React, { useRef, useState,useEffect } from 'react'

const scrollView = () => {
    const [refreshing,setRefreshing]=useState(false)
    const onRefresh =() => {
        setRefreshing(true);
        setTimeout(() =>{
            setRefreshing(false);
            scrollRef.current.scrollToEnd();
        },2000)
    }
    const scrollRef=useRef(null);
    const handleScrollToTop =() => {
        scrollRef.current.scrollTo({y:100});
    }
    
  return (
    <ScrollView ref={scrollRef} 
    refreshControl={
    <RefreshControl 
       refreshing={refreshing} 
       onRefresh={onRefresh} 
       colors={['blue','green','black']}
       size={'large'}
       progressBackgroundColor={'green'}/>}
       onScroll={event => console.warn(event.dispatchConfig)}>
        
        <View style={{width:400,height:400,backgroundColor:'red'}}>
            <Text style={{color:'#fff',fontSize:50}}>Red</Text>
        </View>
    <View style={{width:400,height:400,backgroundColor:'green'}}></View>
    <View style={{width:400,height:400,backgroundColor:'blue'}}></View>
    <View style={{width:400,height:400,backgroundColor:'yellow'}}>
        <TouchableOpacity onPress={handleScrollToTop}>
                 <Text>Scroll To Top</Text>
        </TouchableOpacity>
    </View>
    <View style={{width:400,height:400,backgroundColor:'black'}}></View>
    <View style={{width:400,height:400,backgroundColor:'grey'}}></View>
    <View style={{width:400,height:400,backgroundColor:'pink'}}></View>
    <View style={{width:400,height:400,backgroundColor:'lightblue'}}></View>
    </ScrollView>
  )
}

export default scrollView

const styles = StyleSheet.create({})