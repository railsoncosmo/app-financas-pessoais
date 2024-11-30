import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from "./auth.routes";
import AppRoutes from './app.routes';

function Routes(){
    
    const { signed, loadingLogin } = useContext(AuthContext); // Controla o usuário logado para condicionar a rota
    
    //loading para carregar se o usuário está autenticado para acessar o app
    if(loadingLogin){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f4ff'
                }}
            >
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }

    return(
       /* Verficação de rotas: Se o usuário estiver logado, irá mostrar a tela principal, 
        senão, será direcionado para a rota de login */
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;
