import styled from 'styled-components'
import colors from '../../styles/colors'


export const Head = styled.View`


    height: 100px;
    background-color: ${colors.purple};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

`

export const HeadText = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 30px;
    color: ${colors.white};
    margin-top: 10px;
    margin-left: 20px;
    
`

export const MinorText = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 15px;
    color: ${colors.white};
   margin-top: 10px;
    margin-left: 20px;
`