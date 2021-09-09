import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.background_secundary};
  border-radius: 10px;
  padding: 10px;

`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  text-align: justify;
  padding-bottom: 10px;
`;

