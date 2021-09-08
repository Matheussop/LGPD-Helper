import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;
  border-color: ${({ theme}) => theme.colors.shape};
  border-right-width: 1px;
`
export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secundary_500};

  font-size: ${RFValue(14)}px;
`