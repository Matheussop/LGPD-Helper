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
  const theme = useTheme();

  const [isFilled,setIsFilled] = useState(false);
  const [isFocused,setIsFocused] = useState(false);

  function handleInputFocused(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container >
      <NameInput>{ label }:</NameInput>
      <ValueInput>{ value }</ValueInput>
    </Container>
  );
}