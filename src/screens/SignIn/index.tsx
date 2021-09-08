import React, {useContext, useState} from 'react';
import {Container, Header, TitleWreapper, Title, SignInTitle, Footer, FooterWreapper } from './styles'
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

//SVGS
import GoogleSvg from '../../assets/google.svg'

import { LoginButton } from '../../components/LoginButton'
import { useAuth } from '../../hooks/auth';
import { ActivityIndicator, Alert } from 'react-native';
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [optionEntry, setOptionEntry] = useState< 'userType' | 'accountEntry' >('userType');
  const [userType, setUserType] = useState< 'consultor' | 'cliente' | 'autoavaliação' >('autoavaliação');
  const [textSubTitle, setTextSubTitle] = useState('Escolha seu tipo de usuário.');
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle(){
    try {
      setIsLoading(true);
      return await signInWithGoogle(userType);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Não foi possivel conectar a conta Google');
    } 
  }

  function handleChooseTypeUser(type: 'consultor' | 'cliente' | 'autoavaliação'){
    setUserType(type);
    setTextSubTitle('Faça login em sua conta')
    setOptionEntry('accountEntry')
  }

  function handleResetOptionUser(){
    setTextSubTitle('Escolha seu tipo de usuário.')
    setOptionEntry('userType')
  }

  return(
    <Container>
      <StatusBar barStyle="light-content"
       backgroundColor="transparent"
       translucent
      />
      <Header>
        <TitleWreapper>
          {/* <LogoSvg width={RFValue(120)} height={RFValue(68)}/> */}
          <Title>Seu auxiliar {'\n'} de consultoria {'\n'} na LGPD</Title>
        </TitleWreapper>
        <SignInTitle>             
          {textSubTitle}
        </SignInTitle>
      </Header>
      <Footer>
        { optionEntry === 'userType' ? 
          <FooterWreapper>
            <LoginButton
              title="Consultor"
              onPress={() => handleChooseTypeUser('consultor')}
            />
            <LoginButton
              title="Cliente"
              onPress={() => handleChooseTypeUser('cliente')}
            />
            <LoginButton
              title="Autoavaliação"
              onPress={() => handleChooseTypeUser('autoavaliação')}
            />
          </FooterWreapper>
          :
          <FooterWreapper>
            <LoginButton
              title="Entrar com Google"
              svg={GoogleSvg}
              onPress={handleSignInWithGoogle}
            />
             <LoginButton
              title="Escolher outro tipo de usuário"
              onPress={handleResetOptionUser}
            />
          </FooterWreapper>
        }

        {isLoading && <ActivityIndicator color={theme.colors.shape} size={30} style={{ marginTop: 18 }} />}
      </Footer>
    </Container>
  );
}