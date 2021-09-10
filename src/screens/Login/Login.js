import React from 'react'
import * as S from './styles'
import colors from '../../styles/colors'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext, useAuth } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'
import {View} from 'react-native'

const Login = ({navigation}) => {
    
    const {loginEmail} = useAuth()

    const [emailLog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    const handleSubmit = async () => {

        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        

        if(!emailLog.match(pattern)){
            setError("Insira um endereço de email válido")
            return
        }

        loginEmail(emailLog, passwordLog)

    }

    return (

  
         <S.Wrapper>
        <S.Head>
            <S.Logo source={require('../../../assets/logo.png')}/>
            <S.Text 
            font="Montserrat-Bold" 
            color={colors.white} 
            size="30px">Login</S.Text>
        </S.Head>
            <S.FormBox>
            <S.FieldBox>
                <S.Text 
                font="Montserrat-Bold" 
                color={colors.purple} 
                size="15px">Email</S.Text>
                <S.Field onChangeText={(e)=>{setEmailLog(e)}} />
            </S.FieldBox>
            <S.FieldBox>
                <S.Text 
                font="Montserrat-Bold" 
                color={colors.purple} 
                size="15px">Senha</S.Text>
                <S.Field onChangeText={(e)=>{setPasswordLog(e)}}/>
            </S.FieldBox>
            <S.Button onPress={handleSubmit}>
                <S.Text 
                color={colors.white} 
                font="Montserrat-Medium" 
                size="20px">Entrar</S.Text>
            </S.Button>
            <TouchableOpacity>
                <S.Text 
                style={{marginTop:15, textDecorationLine: 'underline'}} 
                font="Montserrat-Regular" 
                color={colors.purple} 
                size="14px">Esqueci minha senha =(</S.Text>
             </TouchableOpacity>
             </S.FormBox>
           <S.Floor>
           <S.Text 
           font="Montserrat-Medium" 
           color={colors.purple} 
           size="15px">Novo por aqui? </S.Text>
               <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                <S.Text 
                style={{textDecorationLine: 'underline'}} 
                font="Montserrat-Bold" color={colors.purple} 
                size="15px">Cadastre-se</S.Text>
               </TouchableOpacity>
           </S.Floor>
        </S.Wrapper>
 
    )
}

export default Login
