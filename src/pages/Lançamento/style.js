import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Container = styled.SafeAreaView`
    margin-top: 14px;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #000;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #00b94a;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
`;