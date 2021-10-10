import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  margin:  16px 0;
  padding:  0 24px;
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
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;

  text-align: justify;
  padding-bottom: 10px;
`;

export const Info = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
