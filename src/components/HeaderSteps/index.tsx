import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

import {
   Container,
   TitleWreapper,
   Title,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { BackButton } from '../BackButton';

export interface IStep{
  title: string;
  statusText: string;
  progress?: number;
}

export interface Params{
  step: IStep;
}

export function HeaderSteps() {
  const theme = useTheme();
  const {user, signOut} = useAuth();
  const route = useRoute();
  const {step} = route.params as Params;
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
        <BackButton onPress={handleBack} />
        <TitleWreapper>
          <Title>{step.title}</Title>
        </TitleWreapper>
    </Container>
  );
}