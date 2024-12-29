import React, { useContext} from "react";
import 
{ Container,
Message,
Nome,
NewLink,
NewText,
LogoutButtom,
LogoutText,
} from './style';

import Header from "../../components/Header";

import { AuthContext } from "../../contexts/auth"; //Importa o contexto de autenticação

import { useNavigation } from '@react-navigation/native'; //Importa o hook de navegação

export default function Perfil() {
    const { user, logout } = useContext(AuthContext); //Importa na intância o contexto de autenticação de usuários
    const navigation = useNavigation(); //Instância para usar a navegação do app

    return(
        <Container>
            <Header tittle="Meu Perfil"/>
                <Message>
                    Bem vindo, 
                </Message>

                <Nome numberOfLines={1} //Garante que o texto nao seja quebrado, exibee somente 1 linha
                
                >
                    { user && user.name }
                </Nome>

                <NewLink onPress={ () => navigation.navigate('Lancamento')} //Chama o navigate e navega para tela de lançamento
                    >
                    <NewText>Realizar lançamentos</NewText>
                </NewLink>

                <LogoutButtom onPress={ () => logout()} //Chama o logout da intância de AuthContext
                    >
                    <LogoutText>Sair</LogoutText>
                </LogoutButtom>
        </Container>
    )
}