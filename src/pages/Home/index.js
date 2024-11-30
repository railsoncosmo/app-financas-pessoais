import React, { useContext} from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const { logout } = useContext(AuthContext); //Acessando a função do contexts para executar a função logout

 return (
   <View>
     <Text>Tela Home</Text>
     <Button
      title='Sair da conta'
      onPress={() => logout()} //Chama a função para realizar o logout do app
     />
   </View>
  );
}