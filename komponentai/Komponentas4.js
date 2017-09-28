import React, { Component } from 'react';
import { AppRegistry, Text, View,  Button} from 'react-native';

export default class Komponentas4 extends Component {

  

  onPressBtn()
  {
    if(this.props.veiks=='sudetis')
    {
    this.props.getRezultatas(this.props.skaic1 + this.props.skaic2);
    }
    else if(this.props.veiks=='atimtis')
    {
    this.props.getRezultatas(this.props.skaic1 - this.props.skaic2);
    }
    else if(this.props.veiks=='daugyba')
    {
    this.props.getRezultatas(this.props.skaic1 * this.props.skaic2);
    }
    else this.props.getRezultatas(this.props.skaic1 / this.props.skaic2);
  

  }

  

  render() {
    
    return (
        <Button style ={{marginTop: 25}}
        onPress={this.onPressBtn.bind(this)}
        title="Skaiciuoti"
        color="#841584"
        />
    );
  }
}


AppRegistry.registerComponent('Komponentas4', () => Komponentas4);
