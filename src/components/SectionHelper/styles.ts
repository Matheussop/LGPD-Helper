import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  margin-bottom: 16px;

`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const TextBox = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secundary};
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;

  text-align: justify;
  padding-bottom: 10px;
`;

export const Footer = styled(BorderlessButton)``;

export const WrapperFooter = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

`;

export const Info = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
