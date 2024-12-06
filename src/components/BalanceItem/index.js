import React, { useMemo } from "react";
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {
    const labelName = useMemo(() => { //Hokk useMemo para condicionar os dados de acordo com os dados que virão da api
        if(data.tag === 'saldo'){
            return{
                label: 'Saldo atual',
                color: '3b3dbf'
            }
        }else if(data.tag === 'receita'){
            return{
                label: 'Entradas de hoje', 
                color: '00b94a'
            }
        }else{
            return{
                label: 'Saídas de hoje',
                color: 'ef463a'
            }
        }

    }, [])

    return(
        <Container bg={labelName.color}> 
        {/* {Enviando para styled a propriedade "bg" com o valor de labelName no useMemo } */}
            <Label> {labelName.label} </Label>
            <Balance> R${data.saldo.toFixed(2)} </Balance>
        </Container>
    )
}