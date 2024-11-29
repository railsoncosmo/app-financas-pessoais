import React, { useContext, useState } from 'react';
import { Alert, Platform, ActivityIndicator } from 'react-native';

import {
    Background, 
    Container, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText
} from '../Login/style';

// Importa os dados do contexto criado para acesso global dos dados.
import { AuthContext } from '../../contexts/auth';

export default function Cadastro(){

    // Busca os dados do usuário com base no contexto criado em AuthProvider
    const { cadastrar, loadingAuth } = useContext(AuthContext);
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    // Função para cadastrar o usuário
    function handleCadastro(){
        if(nome === '' || email === '' || senha === ''){
            Alert.alert('Preencha todos os campos!');
                return;
        }
        cadastrar(email, senha, nome);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Digite seu nome"
                        value={nome} //Variável de estado que receberar o texto digitado no input
                        onChangeText={(text) => setNome(text)} //Seta o valor da variável de estado
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true} // Esconde o texto digitado no input
                    />
                </AreaInput>
                {/* Chama a função para cadastrar o usuário */}
                <SubmitButton onPress={handleCadastro}>
                {/* condicionar para mostrar o loading ao clicar no botão de cadastrar */}
                    { loadingAuth ? ( // Se loadingAuth for true, mostra o loading
                        <ActivityIndicator size={20} color={'#FFF'}/>
                    ) : ( // Se for false, mostra o texto "Cadastrar"
                        <SubmitText>Cadastrar</SubmitText>
                    )    

                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}