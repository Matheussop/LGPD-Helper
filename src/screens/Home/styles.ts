import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Dimensions, FlatList } from "react-native";
import { IStep } from '.'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};

  padding: 20px 24px 0px;
`;

export const TitleWreapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const ImageProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;
export const Title = styled.Text`
  margin-left: 18px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background_primary};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;

`;
export const TextInfo = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  text-align: justify;

  margin: 23px 0;

  line-height: ${RFValue(18)}px;
  
`;

export const ListSteps = styled(
  FlatList as new () => FlatList<IStep>
  ).attrs({
  showsVerticalScrollIndicator: false,
})``