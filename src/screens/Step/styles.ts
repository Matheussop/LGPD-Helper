import {BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const DescriptionStep = styled.View`
  padding: 10px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.background_secundary};
  border-radius: ${RFValue(10)}px;
`;

export const Footer = styled(BorderlessButton)``;

export const WrapperFooter = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
  margin: 5px 0;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
`;

export const SubTitle = styled.Text`
  margin: 5px 0;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

`;

export const TextDescription = styled.Text`
  text-align: justify;
  margin-bottom: 5px;
`;

export const InputsSteps = styled.ScrollView``;

export const FixedInputs = styled.View``;

export const FilesInputs = styled.View``;

