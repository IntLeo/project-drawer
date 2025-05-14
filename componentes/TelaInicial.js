import React from 'react';
import { Text, View, Image } from 'react-native';

import capa from '../assets/Evee-Capa.jpg';
import estilo from './estilo';

export default function TelaInicial () {
  return (
    <View style={estilo.container}>
      <Image source={capa} style={estilo.capa} resizeMode="contain"/>
      
      <Text style={estilo.titulo}>
        Conhecendo as evoluçoes do Pokémon Eevee
      </Text>

      
      <Text style={estilo.texto}>
       Escolha na barra lateral entre suas diversas formas evolutivas!
      </Text>
    </View>
  );
}