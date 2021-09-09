import React, { useState } from 'react'
import * as S from './styles'
import colors from '../../styles/colors'
import { TouchableOpacity } from 'react-native'

const SignUp = ({navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConf,setPasswordConf ] = useState()
    const [error, setError] = useState()

    const handleSubmit = () => {

        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        if(password != passwordConf){
            setError("As suas senhas não coincidem =(")
        }
        if(password != passwordConf){
            setError("As suas senhas não coincidem =(")
        }

        

    }


    return (
        <S.FormBox>
        <S.FieldBox>
        <S.Text style={{textAlign:'center'}} font="Montserrat-Bold" color={colors.purple} size="25px">Olá, como vai?</S.Text>
        
        <S.Text style={{textAlign:'center', marginTop:20}} font="Montserrat-Regular" color={colors.purple} size="15px"
        >Por favor, informe alguns dados para que possamos te cadastrar</S.Text>
        </S.FieldBox>
        <S.FieldBox>
                <S.Text font="Montserrat-Bold" color={colors.purple} size="15px">Email</S.Text>
                <S.Field onChange={(e)=>{setEmail(e)}} />
        </S.FieldBox>
        <S.FieldBox>
                <S.Text font="Montserrat-Bold" color={colors.purple} size="15px">Senha</S.Text>
                <S.Field onChange={(e)=>{setPassword(e)}} />
        </S.FieldBox>
        <S.FieldBox>
                <S.Text font="Montserrat-Bold" color={colors.purple} size="15px">Confirmar senha</S.Text>
                <S.Field onChange={(e)=>{setPasswordConf(e)}}/>
        </S.FieldBox>
        <S.Button>
            <S.Text color={colors.white} font="Montserrat-Medium" size="20px">Cadastrar</S.Text>
        </S.Button>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                <S.Text 
                style={{textDecorationLine: 'underline', marginTop:20}} 
                font="Montserrat-Bold" color={colors.purple} 
                size="15px">Voltar ao login</S.Text>
               </TouchableOpacity>

        </S.FormBox>
    )
}

export default SignUp
