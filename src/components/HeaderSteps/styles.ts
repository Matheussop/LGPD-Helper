import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  padding: 20px 20px 0px;
`;

export const TitleWreapper = styled.View`
  justify-content: center;
  align-items: center;
  flex:1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background_primary};
`;

export const LogoutButton = styled(BorderlessButton)``;
