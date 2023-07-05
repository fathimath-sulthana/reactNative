import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
const fetchNetworking = () => {
    const[Data,setData] =useState()
    useEffect(() =>{
       // fetchData()
       axiosData()
    },[])
    const axiosData = async () =>{
      try{
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees',
        )
        console.log(response.data)
        setData(response.data.data)
      }catch(error){
        console.log(error)
      }
    }
    const fetchData =async ()=>{
        try{
           const response =await fetch(
            'https://dummy.restapiexample.com/api/v1/employees',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    username:'dummy',
                    password:'8372873',
                })
            }
           )
           const json = await response.json()
           console.log(json)
           setData(json.data)
           console.log(Data)
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

export default fetchNetworking

const styles = StyleSheet.create({})