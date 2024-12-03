import styles from 'styled-components/native';

export const Container = styles.SafeAreaView`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 15px;
    width: 100%;
    max-height: 60px;
`;

export const Tittle = styles.Text`
    font-size: 22px;
    margin-left: 8px;    
`;

export const ButtonMenu = styles.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;