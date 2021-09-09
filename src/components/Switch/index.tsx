import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'

import {
   Container,
   SwitchInput,
   NameInput
} from './styles';
import { useTheme } from 'styled-components';
import { SwitchProps } from 'react-native';

interface Props extends SwitchProps { 
  textInput?: string;
}

export function Switch({value, textInput, ...rest}: Props) {
  const theme = useTheme();

  return (
    <Container >
      <SwitchInput
        trackColor={{ false: "#767577", true: theme.colors.success }}
        thumbColor={value ? theme.colors.line : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={value}
        {...rest}
        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
      />
      <NameInput>
        { textInput }
      </NameInput>
    </Container>
  );
}