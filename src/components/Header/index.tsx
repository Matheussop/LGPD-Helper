import React from 'react';
import { Feather } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import { BackButton} from '../BackButton'
import { useNavigation, useRoute } from "@react-navigation/native";

import {
   Container,
   TitleWreapper,
   ImageProfile,
   Title,
   LogoutButton,
   NameCompany,
   Wrapper,
   UserWreapper
} from './styles';
import { useAuth } from '../../hooks/auth';
import { DataListProps } from '../../screens/Dashboard';
interface Props {
  isBackButton?: boolean;
  home?: boolean;
}

interface Params {
  item: DataListProps;
}

export function Header(  {home=false, isBackButton=false} : Props) {
  const theme = useTheme();
  const {user, signOut} = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const param = route.params as Params  ;

  function handleSignOut(){
    Alert.alert('Tem certeza ?', 'Lembre-se, que se você sair, irá precisar de internet para conectar-se novamente.',[
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      }
    ]);
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleWreapper >
        <UserWreapper exists={!!user.photo && user && user.user_type === 'consultor' && isBackButton }>
        { home ?  user && user.user_type === 'consultor' && isBackButton && <BackButton onPress={handleBack}/> : isBackButton && <BackButton onPress={handleBack}/>}
        {user.photo ?  <ImageProfile source={{uri : user.photo}}/> : null}
        </UserWreapper>
        <Wrapper exists={user && user.user_type === 'consultor' && isBackButton } existsPhoto={!!user.photo}>
          <Title param={param}>Olá {user.name}</Title>
          {param && param.item && param.item.name && <NameCompany>Empresa: {param.item.name}</NameCompany>}
        </Wrapper>
      </TitleWreapper>
      
      <LogoutButton onPress={handleSignOut}>
        <Feather name="power" size={24} color={theme.colors.shape}/>
      </LogoutButton>
    </Container>
  );
}