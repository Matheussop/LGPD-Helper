import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secundary};
  flex: 1;
  height: 45px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  
  border-radius: ${RFValue(10)}px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.main_dark};
  padding: 0 23px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const ValueInput = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;

export const NameInput = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding-left: 5px;
`;