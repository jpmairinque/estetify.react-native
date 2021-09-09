import React from 'react'
import * as S from './styles'
import colors from '../../styles/colors'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {View} from 'react-native'

const Login = () => {
    return (

  
         <S.Wrapper>
        <S.Head>
            <S.Logo source={require('../../../assets/logo.png')}/>
            <S.Text font="Montserrat-Bold" color={colors.white} size="30px">Login</S.Text>
        </S.Head>
            <S.FormBox>
            <S.FieldBox>
                <S.Text font="Montserrat-Bold" color={colors.purple} size="15px">Email</S.Text>
                <S.Field type="email"/>
            </S.FieldBox>
            <S.FieldBox>
                <S.Text font="Montserrat-Bold" color={colors.purple} size="15px">Senha</S.Text>
                <S.Field type="email"/>
            </S.FieldBox>
            <S.Button><S.Text color={colors.white} font="Montserrat-Medium" size="20px">Entrar</S.Text></S.Button>
            <TouchableOpacity>
            <S.Text style={{marginTop:15, textDecorationLine: 'underline'}} font="Montserrat-Regular" color={colors.purple} size="14px">Esqueci minha senha =(</S.Text>
             </TouchableOpacity>
             </S.FormBox>
           <S.Floor>
           <S.Text font="Montserrat-Medium" color={colors.purple} size="15px">Novo por aqui? </S.Text>
               <TouchableOpacity>
               <S.Text style={{textDecorationLine: 'underline'}} font="Montserrat-Bold" color={colors.purple} size="15px">Cadastre-se</S.Text>
               </TouchableOpacity>
           </S.Floor>
        </S.Wrapper>
 
    )
}

export default Login
