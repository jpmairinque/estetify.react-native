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

export const Wrapper = styled.View`

    height: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;


`

export const Head = styled.View`

height: 200px;
width: 100%;
background-color: ${colors.purple};
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

export const Text = styled.Text`

    font-family: ${({font})=>font};
    font-size:  ${({size})=>size};
    color: ${({color})=>color};


`

export const TextBox = styled.View`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;

`

export const Logo = styled.Image`

   width: 60px;
   height: 64px;
   margin-bottom:40px;


`


export const Button = styled.TouchableOpacity`

   width: 80%;
   height: 50px;
   background-color: ${colors.lime};
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
   border-radius: 10px;

`

export const Floor = styled.View`

height: 80px;
background-color: ${colors.gray};
border-top-left-radius: 40px;
border-top-right-radius: 40px;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
`

export const FormBox = styled.View`

width: 100%;
display: flex;
align-items: center;
justify-content: center;

`