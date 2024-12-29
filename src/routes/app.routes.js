import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../pages/Home';
import Lancamento from "../pages/Lançamento";
import Perfil from "../pages/Perfil";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <Drawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props}/> } //Passa o props do Drawer para o componente CustomDrawer
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#fff',
                    paddingTop: 20,
                    width: '70%',
                },
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212',

                drawerItemStyle: {
                    marginBottom: 10,
                    borderRadius: 8,
                }
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={Home} 
            />

            <Drawer.Screen 
                name="Lancamento" 
                component={Lancamento} 
            />

            <Drawer.Screen 
                name="Perfil" 
                component={Perfil} 
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes;