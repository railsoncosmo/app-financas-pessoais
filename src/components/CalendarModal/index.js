import React, { useState } from "react";
import { Container, ButtonTextFilter, ModalContent, ButtonFilter } from "./style";

import { View, TouchableWithoutFeedback } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR; //Configura o calendário para o português
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date()); //Recebe a data que o usuário seleciona no calendário
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {

        setDateNow(new Date(date.dateString)); //Recebe a data que o usuário seleciona no calendário

        let markedDay = {}; //Objeto que muda as propiedades visuais da data selecionada

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarkedDates(markedDay);

    }

    function handleFilterDate() {
        handleFilter(dateNow); //Envia a data selecionada para o componente pai
        setVisible(); //Fecha o modal
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates} //Recebe as propiedades visuais da data selecionada
                    enableSwipeMonths={true} //Habilita o usuário a mudar de mês
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#3b3dbf',
                        selectedDayTextColor: '#fff', 
                    }}
                />


                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonTextFilter>
                        Filtrar
                    </ButtonTextFilter>
                    </ButtonFilter>
            </ModalContent>

        </Container>
    )
}