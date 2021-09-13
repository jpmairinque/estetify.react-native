import React from 'react'
import * as S from './styles'
import Header from '../../components/Header/Header'
import { Ionicons } from "@expo/vector-icons";
import colors from '../../styles/colors';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {

    const {userName, signOut} = useAuth();

    return (
    <>
        <Header title="Perfil"/>
       <S.Wrapper>
           <S.ProfPic source={require('../../../assets/profpic.png')}/>
           <S.DataBox>
               <S.DataLine>
                <Ionicons size={30} name="person-outline" color={colors.lime}/>
                <S.Text>{userName}</S.Text>
               </S.DataLine>
               <S.DataLine>
                <Ionicons size={30} name="logo-instagram" color={colors.lime}/>
                <S.TextRegular>@ana.carlavaz</S.TextRegular>
               </S.DataLine>
               <S.DataLine>
                <Ionicons size={30} name="body-sharp" color={colors.lime}/>
                <S.TextRegular>Biomédica Esteta</S.TextRegular>
               </S.DataLine>
           </S.DataBox>
           <S.LogoutBtn onPress={signOut}>
               <S.TextRegular style={{color:'red', marginLeft: 0}}>Sair</S.TextRegular>
           </S.LogoutBtn>


       </S.Wrapper>
    </>
    )
}

export default Profile
