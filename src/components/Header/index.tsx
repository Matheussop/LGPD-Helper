import React from 'react';
import { Feather } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';

import {
   Container,
   TitleWreapper,
   ImageProfile,
   Title,
   LogoutButton,
} from './styles';

export function Header() {
  const theme = useTheme();

  function handleSignOut(){
    Alert.alert('Tem certeza ?', 'Lembre-se, que se você sair, irá precisar de internet para conectar-se novamente.',[
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => {},
      }
    ]);
  }

  return (
    <Container>
      <TitleWreapper>
        <ImageProfile source={{uri : 'https://avatars.githubusercontent.com/u/36748285?v=4'}}/>
        <Title>Olá {'\n'} Matheus</Title>
      </TitleWreapper>
      <LogoutButton onPress={handleSignOut}>
        <Feather name="power" size={24} color={theme.colors.shape}/>
      </LogoutButton>
    </Container>
  );
}