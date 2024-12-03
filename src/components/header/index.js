import React from 'react';
import { Container, Tittle, ButtonMenu } from './styles'
import Icon from '@react-native-vector-icons/feather';

import { useNavigation } from '@react-navigation/native'; //Importa o hook de navegação

export default function Header({ tittle }) { //Recebendo propriedade tittle do componente pai]
    const navigation = useNavigation(); //Instância a navegação

    return(
        <Container>
            <ButtonMenu
                onPress={() => navigation.openDrawer()} //Chama a intância de navegação e a função openDrawer para abrir o drawer
            >
                <Icon name="menu" size={35} color="#121212"/>
            </ButtonMenu>
            {/* renderização condicional, se o componente pai passar o tittle do header, mostra o tittle */}
            { tittle && (
                <Tittle>
                    {tittle}
                </Tittle>
            )}
        </Container>
    )
}