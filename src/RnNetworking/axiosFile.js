import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
const axiosFile = () => {
    const[Data,setData] =useState()
    useEffect(() =>{
       // fetchData()
       axiosData()
    },[])
    const axiosData = async () =>{
      try{
        const header = {
            'Content -Type':'application/json',
            Authorization:'Bearer YOUR_TOKEN'
        }
        const requestBody = JSON.stringify({
            username : 'Dummy',
            password :'11111'
        })
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees',
        requestBody,
        {header}

        )
        console.log(response.data)
        setData(response.data.data)
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

export default axiosFile

const styles = StyleSheet.create({})