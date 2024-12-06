import React, { useState } from "react";
import { RegisterContainer, RegisterTypeButtom, RegisterLabel } from "./style";
import Icon from '@react-native-vector-icons/feather';

export function RegisterTypes({ type, sendTypeChanged }) {
    const [typeChecked, setTypeChecked] = useState(type);

    function changeType(name){ //Função que recebe o name como valor
        if(name === 'receita'){ //Condicional para mudança de valores
            setTypeChecked('receita');
            sendTypeChanged('receita'); 
        }else{
            setTypeChecked('despesa')
            sendTypeChanged('despesa')
        }
    }

    return (
        <RegisterContainer>
            
            <RegisterTypeButtom 
                checked={ typeChecked === 'receita' ? true : false }
                onPress={ () => changeType('receita') } //Chama a função changeType e passa o parametro 'name'
                > 
                <Icon
                    name="arrow-up"
                    size={25}
                    color="#121212"    
                />
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButtom>

            <RegisterTypeButtom 
                checked={ typeChecked === 'despesa' ? true : false }
                onPress={ () => changeType('despesa') } //Chama a função changeType e passa o parametro 'name'
                >
                <Icon
                    name="arrow-down"
                    size={25}
                    color="#121212"    
                />
                <RegisterLabel>
                    Despesa
                </RegisterLabel>
            </RegisterTypeButtom>

        </RegisterContainer>
    )
}