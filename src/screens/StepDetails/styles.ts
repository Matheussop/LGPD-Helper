import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  text-align: justify;
  margin: 23px 0;
  line-height: ${RFValue(18)}px;
`;

export const ListInputs = styled.View``;

export const ListFiles = styled.View``;

export const TitleFiles = styled.Text`
  margin: 5px 0;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const ListArq = styled.View``;

export const ListImage = styled.View``;

export const OpenFiles = styled(RectButton)``;

export const SubTitles = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.main};
`;

export const AboutFile = styled.View`
  margin: 10px 20px 0px 0px; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameFile = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  max-width: 60%;
`;

export const PreviewImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;
