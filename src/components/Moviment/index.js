import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./style";
import { TouchableWithoutFeedback, Alert } from "react-native";

import Icon from "@react-native-vector-icons/feather";

export default function Moviment({ data, deleteItem }) { //Recebendo propriedade data do componente pai
    function handleDeleteRegister() {
        Alert.alert(
            'Atenção',
            'Tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteRegister}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type} //Enviando para styled a propriedade "tipo" com o valor de data.type para renderizar condicional
                        >
                        <Icon 
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} //Renderização condicional de icone
                            size={20} 
                            color="#fff" 
                        /> 
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    R$ {data.value.toFixed(2)}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}