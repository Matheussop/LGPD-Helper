import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Switch } from 'react-native';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 10px;
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

export const SwitchInput = styled(Switch)``;

export const NameInput = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  padding-left: 10px;
`;