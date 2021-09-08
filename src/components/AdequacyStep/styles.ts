import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
`;

export const StatusProgress = styled.View`
  align-items: center;
`;

export const StatusCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.main};
  z-index: 2;
`;
export const StatusBar = styled.View`
  margin-top: -2px;
  margin-bottom: -2px;
  width: 5px;
  height: 70px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main_dark};
  z-index: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 5px 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const StatusText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;