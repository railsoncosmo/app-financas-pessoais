import styled from "styled-components/native";

export const Container = styled.View` 
    background-color: #${props => props.bg};
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-start;
    width: 320px;
    padding: 15px;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 19px;
    font-weight: bold;
`;

export const Balance = styled.Text`
    margin-top: 5px;
    color: #fff;
    font-size: 30px;
    font-weight: bold
`;

//Recebendo props.bg do componente pai Container