import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

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

export const InputText = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background_secundary};
  flex: 1;
  height: 56px;
  padding: 0 15px;
`;

export const DataText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  padding: 15px 0;
`;

export const NameInput = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding-left: 5px;
`;