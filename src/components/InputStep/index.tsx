import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'

import {
   Container,
   InputText,
   WrapperInput,
   NameInput
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps { 
  label: string;
  value?: string;
}

export function InputStep({label, value, ...rest}: Props) {
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
      { label && 
        <NameInput>
         { label }
        </NameInput>
      }
      <WrapperInput>
        <InputText 
          onFocus={handleInputFocused}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          {...rest}
        />
          {/* <InputText
            onFocus={handleInputFocused}
            onBlur={handleInputBlur}
            isFocused={isFocused}
            label={label}
            value={value} 
            onChangeText={onChangeText}
            {...rest}
          /> */}
      </WrapperInput>
    </Container>
  );
}