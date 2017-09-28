import React, { Component } from 'react';
import { AppRegistry, Text, View,  TextInput} from 'react-native';

export default class Komponentas3 extends Component {

  constructor(){
    super();
    this.state = {
        skaicius1: 0,
        skaicius2: 0,      
    }
  }


  sendSkaicius1(value){
    
        this.setState({skaicius1: parseFloat(value)});
        this.props.getSkaicius1(parseFloat(value));
      }

      sendSkaicius2(value){
        
            this.setState({skaicius2: parseFloat(value)});
            this.props.getSkaicius2(parseFloat(value));
          }

  render() {
    
    return (
        <View>

        <TextInput
        keyboardType='numeric'
        style={{height: 40, textAlign:'center',marginBottom: 25, color:'white'}}
        placeholder="Iveskite pirma skaiciu"
        onChangeText={this.sendSkaicius1.bind(this)}
      />
      <TextInput 
      keyboardType='numeric'
        style={{height: 40, textAlign:'center', marginBottom: 25, color:'white' }}
        placeholder="Iveskite antra skaiciu"
        onChangeText={this.sendSkaicius2.bind(this)}
      />

      </View>

    );
  }
}


AppRegistry.registerComponent('Komponentas3', () => Komponentas3);
