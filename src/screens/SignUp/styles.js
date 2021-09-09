import styled from 'styled-components'
import colors from '../../styles/colors'

export const Field = styled.TextInput`

    background-color: ${colors.white};
   margin-top: 10px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;


`

export const FieldBox = styled.View`

  
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

`

export const Text = styled.Text`

    font-family: ${({font})=>font};
    font-size:  ${({size})=>size};
    color: ${({color})=>color};


`

export const Button = styled.TouchableOpacity`

   width: 80%;
   height: 50px;
   background-color: ${colors.lime};
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-top: 40px;
   border-radius: 10px;

`

export const FormBox = styled.View`
height: 90%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`