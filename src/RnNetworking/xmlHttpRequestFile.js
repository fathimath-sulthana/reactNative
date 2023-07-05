import { StyleSheet, Text, View } from 'react-native'
import React ,{useState,useEffect}from 'react'

const xmlHttpRequestFile = () => {
    const[Data,setData] =useState()
    useEffect(() =>{
      xmlData()
    },[])
   const xmlData = async() => {
    try{
        const xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET','https://jghjsdh.com',true)
        xmlRequest.setRequestHeader('Content-Type' ,'application/json')
        xmlRequest.setRequestHeader('Authorization','YOUR KEY')
       xmlRequest.onreadystatechange = () =>{
          if(xmlRequest.readyState === 4){
              if(xmlRequest.status === 200){
                  const response = JSON.parse(xmlRequest.responseText)
                  setData(response)
              } else{
                  console.log(xmlRequest.status)
              }   
          }
      }
      xmlRequest.onerror = error =>{
        console.log(error);
      }
      xmlRequest.send()
      }catch(error){
         console.log(error)
      }
   }
    return (
        <View style={{flex:1,margin:20,padding:10}} >
          <Text>fetchNetworking</Text>
          {Data? Data.map((item,index) =>{
            return <View key={index}>
                <Text>{item.employee_name}</Text>
            </View>
          }): null}
        </View>
      )
}

export default xmlHttpRequestFile;

const styles = StyleSheet.create({})