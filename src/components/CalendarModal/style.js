import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(34, 34, 34 , 0.4);
`;

export const ButtonFilter = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #3b3bdf;
    height: 45px;
    border-radius: 4px;
`; 

export const ButtonTextFilter = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const ModalContent = styled.View`
    flex: 2;
    background-color: #fff;
    justify-content: center;
    padding: 14px;
`;