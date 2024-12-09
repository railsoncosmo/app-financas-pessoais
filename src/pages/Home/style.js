import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
    max-height: 190px;
`;

export const AreaMoviment = styled.View`
    background-color: #fff;
    border-radius: 10px;
    padding-left: 14px;
    padding-right: 14px;
    flex-direction: row;
    align-items: baseline;
    margin-top: 20px;
    padding-top: 10px;
`;

export const Tittle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 4px;
    margin-bottom: 14px;
    color: '#121212'
`;

export const ListMoviment = styled.FlatList`
    flex: 1;
    background-color: #fff;
`;