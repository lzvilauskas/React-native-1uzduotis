import React, { Component } from 'react';
import { AppRegistry,  View, Image, Text} from 'react-native';

export default class Komponentas1 extends Component {

 

  render() {
    
    return (
      <Image
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
        }}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrdInG5EOSgMbicCY3dDXpRUU9QjXrqIMlN7MpmLRLVtv-xNl' }}
>
{this.props.children}
</Image>

    );
  }
}




AppRegistry.registerComponent('Komponentas1', () => Komponentas1);