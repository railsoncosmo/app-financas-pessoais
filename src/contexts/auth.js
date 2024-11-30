import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

    // Passando o children para o AuthProvider
    function AuthProvider({ children }) {
        const [user, setUser] = useState(null); //Controle de usuários
        const [loadingAuth, setLoadingAuth] = useState(false); //Loading inicia desativado
        const [loadingLogin, setLoadingLogin] = useState(true); //Loading inicia ativo para carregar se o usuário está autenticado para acessar o app.

    const navigation = useNavigation();

    useEffect(() => {
      async function loadKeyStorage(){
        //Busca o token salvo no AsyncStorage e seta na variável "storageUser".
        const storageUser = await AsyncStorage.getItem('@keyToken');

        //Verifica se o token foi salvo no AsyncStorage(storageUser).
        if(storageUser){
          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}` //Se for bem sucedido, passa o token do usuário que está no AsyncStorage para a api
            }
          })
          .catch(() => { //Se não conseguir buscar o token do usuário, limpa o AsyncStorage e retorna para a tela de login
            setUser(null);
          })

          //Se for bem sucedido, passa o token do usuário para ter acesso a todas as rotas globais do app
          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data); //Passando os dados do usuário autenticado para a variável User

          setLoadingLogin(false); //Após o usuário estar autenticado, desativa o loading e entra no app.

        }
        setLoadingLogin(false);
      }

      loadKeyStorage();
    }, [])

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

        //Salva o token do usuário logado na chave 'keyToken' localmente no AsyncStorage
        await AsyncStorage.setItem('@keyToken', token);

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

    //função para realizar o logout no usuário limpando o token do AsyncStorage.
    async function logout(){
      await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
    }

 return (
   <AuthContext.Provider
    value={{ signed: !!user, user, cadastrar, login, loadingAuth, loadingLogin, logout }} // Valores que serão acessados globalmente
   >
    {/* "signed !!user" converte o estado de usuário para booleano */}
    {/* Children dá acesso dos dados a toda aaplicação */}
     {children}
   </AuthContext.Provider>
  );
}

export default AuthProvider;