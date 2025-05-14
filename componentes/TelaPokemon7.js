import React from 'react';
import { Text, View, Image } from 'react-native';

import pokemon from '../assets/Evee-Gelo.png';
import estilo from './estilo';

export default function TelaPokemon1 () {
  return (
    <View style={estilo.container}>
      <Image source={pokemon} style={estilo.capa} resizeMode="contain"/>
      
      <Text style={estilo.titulo}>
        Evee - Gelo
      </Text>

      <Text style={estilo.texto}>
        Pokémon em sua evolução elemental de Gelo.
      </Text>
    </View>
  );
}