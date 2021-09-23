import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'

import {
   Container,
   NameInput,
   ValueInput
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps { 
  label: string;
  value?: string;
}

export function ShowInputStep({label, value, ...rest}: Props) {

  return (
    <Container >
      <NameInput>{ label }:</NameInput>
      <ValueInput numberOfLines={1}>{ value }</ValueInput>
    </Container>
  );
}