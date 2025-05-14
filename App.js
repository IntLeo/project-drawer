import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from './componentes/TelaInicial.js';
import TelaPokemon1 from './componentes/TelaPokemon1.js';
import TelaPokemon2 from './componentes/TelaPokemon2.js';
import TelaPokemon3 from './componentes/TelaPokemon3.js';
import TelaPokemon4 from './componentes/TelaPokemon4.js';
import TelaPokemon5 from './componentes/TelaPokemon5.js';
import TelaPokemon6 from './componentes/TelaPokemon6.js';
import TelaPokemon7 from './componentes/TelaPokemon7.js';
import TelaPokemon8 from './componentes/TelaPokemon8.js';
import TelaPokemon9 from './componentes/TelaPokemon9.js';



const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { TelaInicial } />
        <Drawer.Screen name="Normal" component = { TelaPokemon1 } />
        <Drawer.Screen name="Evolucão Água" component = { TelaPokemon2 } />
        <Drawer.Screen name="Evolucão Dark" component = { TelaPokemon3 } />
        <Drawer.Screen name="Evolucão Eletrica" component = { TelaPokemon4 } />
        <Drawer.Screen name="Evolucão Fada" component = { TelaPokemon5 } />
        <Drawer.Screen name="Evolucão Fogo" component = { TelaPokemon6 } />
        <Drawer.Screen name="Evolucão Gelo" component = { TelaPokemon7 } />
        <Drawer.Screen name="Evolucão Planta" component = { TelaPokemon8 } />
        <Drawer.Screen name="Evolucão Psiquica" component = { TelaPokemon9 } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}