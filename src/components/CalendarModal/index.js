import React, { useState } from "react";
import { Container, ButtonTextFilter, ModalContent, ButtonFilter } from "./style";

import { View, TouchableWithoutFeedback } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function CalendarModal({ setVisible }) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {

        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            selectedTextColor: '#fff',
        }

        setMarkedDates(markedDay);

    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={{ flex: 1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                    onDayPress={() => handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff', 
                    }}
                />


                <ButtonFilter>
                    <ButtonTextFilter>
                        Filter
                    </ButtonTextFilter>
                    </ButtonFilter>
            </ModalContent>

        </Container>
    )
}