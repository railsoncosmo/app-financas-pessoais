import React, { useState } from "react";
import { Background, Container, Input, SubmitButton, SubmitText } from "./style";

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { RegisterTypes } from "../../components/RegisterTypes";
import Header from "../../components/Header";

export default function Lancamento() {
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
                    onPress: () => alert('Lançamento realizado com sucesso!')
                }
            ]
        )

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