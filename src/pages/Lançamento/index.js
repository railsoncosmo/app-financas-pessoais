import React, { useState } from "react";
import { Background, Container, Input, SubmitButton, SubmitText } from "./style";

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { RegisterTypes } from "../../components/RegisterTypes";
import Header from "../../components/Header";

import api from "../../services/api";
import { format } from "date-fns"; 

import { useNavigation } from "@react-navigation/native"; //Importa o hook de navegação
export default function Lancamento() {
    const navigation = useNavigation(); //Instância a navegação

    const [descriptionInput, setDescriptionInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [type, setType] = useState('receita'); //O valor do lançamento inicia com o valor 'receita'

    function handleSubmit(){
        Keyboard.dismiss();
        //Verifica se o valor input é diferente de número e retorna um booleano e verifica se o type foi selecionado
        if(isNaN(parseFloat(valueInput)) || type === null || descriptionInput.trim() === ''){
            alert("Preencha todos os campos!")
            return;
        }

        Alert.alert(
            'Confirme o lançamento',
            `Nome: ${descriptionInput}\nTipo de lançamento: ${type}\nValor do lançamento: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => registerLancamento()
                }
            ]
        )

        async function registerLancamento(){
            Keyboard.dismiss(); //Fechar o teclado ao registrar

            await api.post('/receive',{
                description: descriptionInput,
                value: Number(valueInput),
                type: type,
                date: format(new Date(), 'dd/MM/yyyy') //Formatando a data para o padrão brasileiro dd/MM/yyyy
            })

        setDescriptionInput('');
        setValueInput('');
        navigation.navigate('Home'); //Navega para a tela Home após o lançamento

        }
    }

    return(

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header tittle={"Lançamento"}/>
                <Container>

                    <Input
                        placeholder="Descrição do lançamento"
                        value={descriptionInput}
                        onChangeText={(text) => setDescriptionInput(text)}
                    />

                    <Input
                        placeholder="Valor do lançamento"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes
                        type={type} //Enviando como propriedade para o componente o valor de type
                        sendTypeChanged={(item) => setType(item)} //Ao selecionar o item no componente, será recebido como propriedade e setar na state de Type
                    />

                    <SubmitButton
                        onPress={handleSubmit}
                    >
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>


                </Container>
            </Background>
        </TouchableWithoutFeedback>
    )
}