import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={Home} 
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes;