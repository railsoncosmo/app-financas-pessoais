import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from "./auth.routes";
import AppRoutes from './app.routes';

function Routes(){
    
    const { signed } = useContext(AuthContext); // Controla o usuário logado para condicionar a rota
    const loading = false;

    return(
       /* Verficação de rotas: Se o usuário estiver logado, irá mostrar a tela principal, 
        senão, será direcionado para a rota de login */
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;
