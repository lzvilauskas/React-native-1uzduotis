import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

import Komponentas1 from './komponentai/Komponentas1';
import Komponentas2 from './komponentai/Komponentas2';
import Komponentas3 from './komponentai/Komponentas3';
import Komponentas4 from './komponentai/Komponentas4';
import Komponentas5 from './komponentai/Komponentas5';



export default class PirmaUzduotis extends Component {

  constructor(){
    super();
    this.state = {
       veiksmas: 'sudetis',
       skaicius1: 0,
       skaicius2: 0,
       rezultatas: 0
    }
  }

  getVeiksmas(value){
    this.setState({
        veiksmas: value
    });
  }
  
  getSkaicius1(value){
    this.setState({
        skaicius1: value
    });
  }

  getSkaicius2(value){
    this.setState({
        skaicius2: value
    });
  }

  getRezultatas(value){
    this.setState({
       rezultatas: value
    });
  }
  
  
  render() {

    return (
      
      <Komponentas1>
     
        
        
         <Komponentas2 getVeiksmas={this.getVeiksmas.bind(this)}/>
          <Komponentas3 getSkaicius1={this.getSkaicius1.bind(this)} getSkaicius2={this.getSkaicius2.bind(this)}/>
          <Komponentas4 getRezultatas={this.getRezultatas.bind(this)} veiks={this.state.veiksmas} skaic1={this.state.skaicius1} skaic2={this.state.skaicius2}/>
          <Komponentas5 rez={this.state.rezultatas}/>



      
      </Komponentas1>
      
    );
  }
}




AppRegistry.registerComponent('PirmaUzduotis', () => PirmaUzduotis);