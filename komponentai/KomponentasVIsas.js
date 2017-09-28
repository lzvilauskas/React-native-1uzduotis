import React, { Component } from 'react';
import { AppRegistry, Text, View, Picker, TextInput, Button } from 'react-native';

export default class KomponentasVisas extends Component {

  constructor(){
    super();
    this.state = {
       veiksmas: 'sudetis',
       skaicius1: 0,
       skaicius2: 0,
       rezultatas: 0

    }
  }

 onPressBtn()
 {
   if(this.state.veiksmas=='sudetis')
   {
   this.setState({ rezultatas: this.state.skaicius1 + this.state.skaicius2 });
   }
   else if(this.state.veiksmas=='atimtis')
   {
   this.setState({ rezultatas: this.state.skaicius1 - this.state.skaicius2 });
   }
   else if(this.state.veiksmas=='daugyba')
   {
   this.setState({ rezultatas: this.state.skaicius1 * this.state.skaicius2 });
   }
   else this.setState({ rezultatas: this.state.skaicius1 / this.state.skaicius2 });
 }

  render() {
    return (
      
      <View>        
          <Picker
          selectedValue={this.state.veiksmas} 
          onValueChange={(veiksmas) => this.setState({veiksmas})}
          >
           <item label="Sudetis" value="sudetis" />
           <item label="Atimtis" value="atimtis" />
           <item label="Daugyba" value="daugyba" />
           <item label="Dalyba" value="dalyba" />
          </Picker>

       <TextInput
          keyboardType='numeric'
          style={{height: 40, textAlign:'center'}}
          placeholder="Iveskite pirma skaiciu"
          onChangeText={(skaicius) => this.setState({skaicius1:parseFloat(skaicius)})}
        />
        <TextInput 
        keyboardType='numeric'
          style={{height: 40, textAlign:'center'}}
          placeholder="Iveskite antra skaiciu"
          onChangeText={(skaicius) => this.setState({skaicius2:parseFloat(skaicius)})}
        />
        
        
        <Button
        onPress={this.onPressBtn.bind(this)}
        title="Skaiciuoti"
        color="#841584"
/>
        <Text style={{height: 40, textAlign:'center'}}>Atsakymas: {this.state.rezultatas}</Text>
        
      </View>
    );
  }
}


AppRegistry.registerComponent('KomponentasVisas', () => KomponentasVisas);