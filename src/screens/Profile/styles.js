import styled from "styled-components";
import colors from "../../styles/colors";

export const ProfPic = styled.Image`

    margin-top: 40px;
    width: 200px;
    height: 200px;
    border-radius: 400px;


`

export const Wrapper = styled.View`
    
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;


`
export const DataBox = styled.View`
    margin-top: 40px;
    display: flex;
    width: 80%;
  
    flex-direction: column;
    
    

`

export const DataLine = styled.View`

    flex-direction: row;
    align-items: center;
    
    

`

export const Text = styled.Text`

    font-family: 'Montserrat-Bold';
    font-size: 20px;
    color: ${colors.black};
    margin-left: 10px;


`

export const TextRegular = styled.Text`

    font-family: 'Montserrat-Regular';
    font-size: 17px;
    color: ${colors.black};
    margin-left: 10px;


`

