import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

export const AuthContext = createContext({});

    // Passando o children para o AuthProvider
    function AuthProvider({ children }) {
        const [user, setUser] = useState(null); //Controle de usuários
        const [loadingAuth, setLoadingAuth] = useState(false); //Loading inicia desativado

    const navigation = useNavigation();

    //função para cadastrar o usuário
    async function cadastrar(email, senha, nome){
      setLoadingAuth(true);
      try{
        const response = await api.post('/users', {
          name: nome,
          email: email,
          password: senha,
        })

        setLoadingAuth(false); //Desativa o loading
        navigation.goBack(); //Retorna para a tela de login após o cadastro

      }catch(error){
        Alert.alert('Erro ao cadastrar o usuário!', error);
        setLoadingAuth(false);
      }
    }

    //função para realizar o login
    async function login(email, senha){
      setLoadingAuth(true);

      try{
        const response = await api.post('/login', {
          email: email,
          password: senha,
        })

        //Desestrutura os dados do response para acessar os dados do usuário no app
        const { id, name, token } = response.data;

        //Cria um objeto com os dados extraídos do response do usuário
        const data = {
          id,
          name,
          email,
          token,
        };

        //Salva o token do usuário para atenticar na api e acessar o app
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser({
          id,
          name,
          email,
        })

        setLoadingAuth(false);

      }catch(error){
        Alert.alert('Erro ao realizar o login!', error);
        setLoadingAuth(false);
      }
    }

 return (
   <AuthContext.Provider
    value={{ signed: !!user, user, cadastrar, login, loadingAuth}} // Valores que serão acessados globalmente
   >
    {/* "signed !!user" converte o estado de usuário para booleano */}
    {/* Children dá acesso dos dados a toda aaplicação */}
     {children}
   </AuthContext.Provider>
  );
}

export default AuthProvider;