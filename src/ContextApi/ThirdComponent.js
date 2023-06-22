import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class ThirdComponent extends Component {
    constructor(props){
        super(props)
        this.state={user:'Abc'}
    }
  render() {
    return (
        <View style={{marginTop:20}}>
        <Text style={{fontSize:25,color:'red'}}>SecondComponent ={this.props}</Text>
        
      </View>
    )
  }
}

export default ThirdComponent