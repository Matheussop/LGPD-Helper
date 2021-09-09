import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler'

import styled, { css } from 'styled-components/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface OptionsProps { 
  active: boolean;
}

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 127px;
  padding: 0 26px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + 15}px ;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;

`;

export const Title = styled.Text` 
  font-size: ${RFValue(25)}px;
  font-family: ${({theme }) => theme.fonts.secundary_600};
  color: ${({ theme }) => theme.colors.shape};
`;


export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 30px;
  `;

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  /* border-radius: 20px; */
  background-color: ${({ theme }) => theme.colors.main_dark};
  
  justify-content: center;
  align-items: center;
  
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 80px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;

  border-bottom-width: 1px;
  border-bottom-color:  ${({ theme }) => theme.colors.line};

  margin-bottom: 24px;

`;

export const Option = styled.TouchableOpacity<OptionsProps>`
    ${({ theme, active }) => active && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
  padding: 14px;
`;

export const OptionTitle = styled.Text<OptionsProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme, active }) =>  active ? theme.fonts.secundary_600 : theme.fonts.secundary_500};
  color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.text_detail};
`;

export const Section = styled.View``;

export const TextInfo = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_light};

  text-align: justify;
`;

export const InfoWreapper = styled.View`
  align-items: center;
  justify-content: center;

  padding: 10px 25px;
`;

export const WrapperButtons = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const ButtonSuport = styled.View`
  align-items: center;
  width: 60%;
`;

export const ButtonsTerms = styled.View`
  flex-direction: row;
  margin: 10px 0px; 
`;

export const ButtonTerm = styled.View`
  width: 50%;
  margin: 0px 10px; 
`;

export const ButtonAbout= styled.View`
  width: 50%;
  margin: 0px 10px;
`;
