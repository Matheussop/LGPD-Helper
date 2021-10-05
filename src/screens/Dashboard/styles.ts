import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native"
import {DataListProps} from '.'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false, 
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(2)}px;
`;

export const Editings = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(22)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-bottom: 10px;
`

export const ConsultsList = styled(
  FlatList as new () => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
})``

export const LoadContainer = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`;
// export const Title = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.bold};
//   font-size: 24px;
//   color: ${({ theme }) => theme.colors.title};
// `;


export const SubTitleButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-bottom: 10px;
`;

export const SubTitle = styled.Text`
  background-color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.main};
`;
