import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: ${({ theme}) => theme.colors.main};

  justify-content: flex-end;
  align-items: center;
`;

export const TitleWreapper = styled.View`
  align-items: center;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium}; 
  color: ${({ theme }) => theme.colors.shape}; 
  font-size: ${RFValue(30)}px;

  text-align: center;
  margin-top: 45px;
`;

export const SignInTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(16)}px;

  margin-top: 60px;
  margin-bottom: 100px;

`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  
  background-color: ${({ theme}) => theme.colors.main_dark};

`;

export const FooterWreapper = styled.View`
  margin-top: ${RFPercentage(-6)}px;
  padding: 0 32px;

  justify-content: space-between;
`