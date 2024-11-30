import React, { useState, useContext } from 'react';
import { ActivityIndicator, Platform, Alert } from 'react-native';
import {
     Background, 
     Container, 
     Logo, 
     AreaInput, 
     Input,
     SubmitButton,
     SubmitText,
     Link,
     LinkText
} from './style';

// Importa o hook de navegação
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function Login(){
    //Instancia a navegação usando o hook e utilizando a variável "navigation".
    const navigation = useNavigation();

    const { login, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(){
        if(email === '' || senha === ''){
            Alert.alert('Preencha todos os campos!');
            return;
        }
        login(email, senha);
    }

    return(
        <Background>
            <Container
                // garante que no sistema IOS o teclado tenha o comportamento
                //  de padding ao clicar no input
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.7} onPress={handleLogin}> 
                    {/* Propriedade que muda a opacidade ao do botão ao clicar */}

                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) : (
                            <SubmitText>Entrar</SubmitText>
                        )
                    }

                </SubmitButton>

                <Link
                    onPress={ () => navigation.navigate('Cadastro') }
                >
                    {/* Ao clicar Navega para a tela de cadastro usando a navegação */}
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
}