import React from 'react';
import { Feather } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';

import {
   Container,
   TitleWreapper,
   ImageProfile,
   Title,
   LogoutButton
} from './styles';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const theme = useTheme();
  const {user, signOut} = useAuth();

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

  return (
    <Container>
      <TitleWreapper>
        {user.photo ?  <ImageProfile source={{uri : user.photo}}/> : null}
        <Title>Olá {'\n'}{user.name}</Title>
      </TitleWreapper>
      <LogoutButton onPress={handleSignOut}>
        <Feather name="power" size={24} color={theme.colors.shape}/>
      </LogoutButton>
    </Container>
  );
}