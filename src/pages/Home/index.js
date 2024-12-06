import React, { useContext, useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { Background, ListBalance } from './style';

import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';

export default function Home() {
  const IsFocused = useIsFocused(); //Verifica se o componente está sendo exibido na tela e retorna true ou false

  const [listBalance, setListBalance] = useState([]); //Estado que irá armazenar a resposta do backend
  const [dateMoviment, setDateMoviment] = useState(new Date()); //Estado que irá armazenar a data atual

  useEffect(() => {
    let isActive = true;

    async function getMoviments(){
      let dateFormated = format(dateMoviment, 'dd/MM/yyyy') //Formatando a data para o padrão brasileiro dd/MM/yyyy

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated //Api irá receber como parametro a data enviada
        }
      })
      //Variável isActive verifica se o componente está ativo na tela, se estiver ativo, irá setar a os dados em setListBalance
      if(isActive){
        setListBalance(balance.data);
      }
    }
    getMoviments();

    //Se o componente for desativado, ou seja, não estiver sendo exibido na tela, será setado o valor da variável isActive para false
    return () => {
      isActive = false
    }
  }, [IsFocused]) //Verifica se o componente estiver sendo exibido na tela, se estiver, irá executar o useEffect e atualizar os dados do backend

 return (
   <Background>
    {/* O componente Header recebe o tittle como propriedade de cada página */}
    <Header tittle="Movimentações"/>

    <ListBalance
      data={listBalance}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => (item.tag)}
      renderItem={({ item })=> ( <BalanceItem data={item}/> )}
    />
   </Background>
  );
}