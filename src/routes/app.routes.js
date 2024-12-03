import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor: '#fff',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212',
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={Home} 
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes;