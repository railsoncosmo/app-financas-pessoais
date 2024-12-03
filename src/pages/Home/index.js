import React, { useContext} from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/header';
import { Background } from './style';

export default function Home() {

 return (
   <Background>
    {/* O componente Header recebe o tittle como propriedade de cada página */}
    <Header tittle="Movimentações"/>
   </Background>
  );
}