import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondComponent from './SecondComponent';

export class ContextApi extends Component {
    constructor(){
        super();
        this.state={user:'Abc'}
    }
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text style={{fontSize:30,color:'red'}}>Hello</Text>
        <Text style={{fontSize:30,color:'blue'}}>{this.state.user}</Text>
      <SecondComponent user={this.state.user/>
      </View>
    )
  }
}

export default ContextApi