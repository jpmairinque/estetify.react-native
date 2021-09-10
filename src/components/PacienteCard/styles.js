import styled from "styled-components";
import colors from "../../styles/colors";

export const CardWrapper = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: ${colors.white};
  align-self: center;
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

export const ProfPic = styled.Image`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 300px;
  width: 45px;
  height: 45px;
  border-color: ${colors.lime};
   border-width: 3px;
`;

export const Text = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 18px;
  color: ${colors.black};
`;
