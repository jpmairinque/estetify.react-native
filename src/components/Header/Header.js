import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import * as S from './styles'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Header = ({title}) => {


    const {userName, signOut} =useAuth()
   

    

    return (
      <S.Head>
          <S.MinorText>Olá, {userName}</S.MinorText>
          <S.HeadText>{title}</S.HeadText>
         
      </S.Head>
    )
}

export default Header
