import React, {useContext} from "react";
import { View, Text, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {
    const { user, logout } = useContext(AuthContext);

    return(
        <DrawerContentScrollView {...props} //Pega todas as propriedades do DrawerContentScrollView e passa para o DrawerContentScrollView
            >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 90, height: 90 }}
                    resizeMode="contain" //Garante que a imagem se adeque ao tamanho do width
                />

                <Text style={{fontSize: 18, marginTop: 14}}>
                    Bem vindo
                </Text>

                <Text style={{fontSize: 18, marginBottom: 14, fontWeight: 'bold', paddingHorizontal: 20}}>
                    { user && user.name}
                </Text>

            </View>
            <DrawerItemList {...props} //Pega todas as propriedades do DrawerItemList e passa para o DrawerContentScrollView
                />
            <DrawerItem {...props} //Pega todas as propriedades do DrawerItem e passa para o DrawerContentScrollView
                label={"Sair do app"}
                onPress={() => logout()}
            />
        </DrawerContentScrollView>
    )
}