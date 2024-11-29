import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerStyle: {
                        backgroundColor: '#3b3dbf',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Voltar',
                    // Propriedade que faz com que no sistema IOS não apareça o nome votar, 
                    // ao invés do icone da seta de voltar
                    headerBackTitleVisible: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;