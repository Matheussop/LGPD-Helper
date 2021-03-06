import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ContainerProps { 
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;

`;

export const WrapperInput = styled.View`
  flex-direction: row;

  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background_secundary};
  justify-content:center;
  align-items:center;
  margin-right: 2px;
`;

export const InputText = styled(TextInput)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background_secundary};
  flex: 1;
  height: 56px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  
  padding: 0 23px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const NameInput = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding-left: 5px;
`;