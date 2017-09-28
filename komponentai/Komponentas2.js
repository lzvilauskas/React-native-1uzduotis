import React, { Component } from 'react';
import { AppRegistry, Text, View,  Picker} from 'react-native';

export default class Komponentas2 extends Component {

  constructor(){
    super();
    this.state = {
       veiksmas: 'sudetis'
    }
  }

  sendVeiksmas(value){

    this.setState({veiksmas: value});
    this.props.getVeiksmas(value);
    
  }

  

  render() {
    
    return (
      <Picker
      style ={{marginBottom: 25, color:'white'}}
          selectedValue={this.state.veiksmas} 
          onValueChange={this.sendVeiksmas.bind(this)}
          >
           <item label="Sudetis" value="sudetis" />
           <item label="Atimtis" value="atimtis" />
           <item label="Daugyba" value="daugyba" />
           <item label="Dalyba" value="dalyba" />
          </Picker>

    );
  }
}


AppRegistry.registerComponent('Komponentas2', () => Komponentas2);
