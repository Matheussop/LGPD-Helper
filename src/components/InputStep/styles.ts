import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps { 
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 8px;
`;

export const InputText = styled(TextInput)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background_secundary};
  flex: 1;
  min-height: 50px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  
  border-radius: ${RFValue(10)}px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.main_dark};
  padding: 0 10px;
  z-index: 2;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 5px;
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const NameInput = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding-left: 5px;
`;

export const DescriptionButton = styled(RectButton)``;

export const DescriptionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text_detail};
  border-top-width: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: -20px;
  padding: 20px 15px 5px 5px;
  z-index: 1;
`;

export const TextDescripiton = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding-left: 5px;
  width: 90%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};

  font-size: ${(RFValue(12))}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  padding-left: 12px;
  margin: 7px 0;
`;