import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class Komponentas5 extends Component {



  render() {
    
    return (
      <Text style={{height: 60, textAlign:'center', marginTop: 15, color:'white' }}>Rezultatas: {this.props.rez}</Text>

    );
  }
}


AppRegistry.registerComponent('Komponentas5', () => Komponentas5);