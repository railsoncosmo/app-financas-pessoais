import React, { useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import Header from '../../components/Header';
import Moviment from '../../components/Moviment';
import { Background, ListBalance, AreaMoviment, Tittle, ListMoviment } from './style';

import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import CalendarModal from '../../components/CalendarModal';

import Icon from '@react-native-vector-icons/feather';

export default function Home() {
  const IsFocused = useIsFocused(); //Verifica se o componente está sendo exibido na tela e retorna true ou false

  const [listBalance, setListBalance] = useState([]); //Estado que irá armazenar a resposta do backend
  const [dateMoviment, setDateMoviment] = useState(new Date()); //Estado que irá armazenar a data atual
  const [listMoviment, setListMoviment] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); //Modal inicia desativado

  useEffect(() => {
    let isActive = true;

    async function getMoviments(){
      let date = new Date(dateMoviment);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000; //Tirando o timeZone para formatar a data
      let dateFormated = format(onlyDate, 'dd/MM/yyyy') //Formatando a data para o padrão brasileiro dd/MM/yyyy

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated //Api irá receber como parametro a data enviada
        }
      })

      const receives = await api.get('receives', {
        params: {
          date: dateFormated
        }
      })
      //Variável isActive verifica se o componente está ativo na tela, se estiver ativo, irá setar a os dados em setListBalance
      if(isActive){
        setListMoviment(receives.data);
        setListBalance(balance.data);
      }
    }
    getMoviments();

    //Se o componente for desativado, ou seja, não estiver sendo exibido na tela, será setado o valor da variável isActive para false
    return () => {
      isActive = false
    }
  }, [IsFocused, dateMoviment]) //Verifica se o componente estiver sendo exibido na tela, se estiver, irá executar o useEffect e atualizar os dados do backend

  async function handleDelete(id){
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })

      setDateMoviment(new Date())
    } catch (error) {
      console.log(error);
    }
  }

  function filterDateMoviments(dateSelected){
    setDateMoviment(dateSelected);
  }

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

    <AreaMoviment>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="calendar" size={29} color="#121212"/>
      </TouchableOpacity>
        <Tittle>Ultimas movimentações</Tittle>
    </AreaMoviment>

    <ListMoviment
      data={listMoviment}
      keyExtractor={(item) => (item.id)}
      renderItem={({ item }) => <Moviment data={item} deleteItem={handleDelete} /> } //Enviando o data da api para componente Moviment
      showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
      >
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMoviments}
        />
      </Modal>
    
   </Background>
  );
}