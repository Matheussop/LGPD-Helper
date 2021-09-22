import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

interface TitleProps{
  param: any;
}

interface UserProps{
  exists: boolean;
  existsPhoto?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};

  padding: 20px 24px 0px 14px;
  
`;

export const TitleWreapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ImageProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;
export const Title = styled.Text<TitleProps>`
  margin-left: 18px;
  font-size: ${({param}) => param && param.item.name ? RFValue(14) : RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background_primary};
`;

export const UserWreapper = styled.View<UserProps>`
  flex-direction: row;
  align-items: center;
`;

export const NameCompany = styled.Text`
  margin-left: 18px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background_primary};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Wrapper = styled.View<UserProps>`
  justify-content: flex-start;
  align-items: flex-start;
  width: ${({ exists, existsPhoto }) => existsPhoto ? 70 : exists ?  88 :  90}%;
`;
