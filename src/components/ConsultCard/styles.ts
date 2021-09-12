import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from 'react-native-gesture-handler'


export const Container = styled(BorderlessButton)`
  background-color: ${({ theme }) => theme.colors.background_secundary};

  border-radius: 5px;

  padding: 17px 24px ;
  margin-bottom: 16px;
`;

export const  Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.main_dark}
`
export const  Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const  Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 19px;

`

export const DescriptionBar = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;