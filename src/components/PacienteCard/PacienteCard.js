import React from 'react'
import * as S from './styles'
import { Text, View, Image } from 'react-native'

const PacienteCard = () => {
    return (

        <S.CardWrapper>

            <S.ProfPic source={require('../../../assets/profpic.png')} />
            <S.Text> Ana Braz</S.Text> 
           

        </S.CardWrapper>
        
    )
}

export default PacienteCard
