import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
  min-height: 120px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 8px;
  border-radius: ${RFValue(10)}px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.main_dark};
  background-color: ${({ theme }) => theme.colors.background_secundary};
  flex: 1;
  min-height: 40px;
  padding: 0 10px;
  z-index: 2;
`;

export const PickerInput = styled(Picker)`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  flex: 1;
  min-height: 40px;
  padding: 0 10px;
  z-index: 3;
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
  width: 80%;
`;
