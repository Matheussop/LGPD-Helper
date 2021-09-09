import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'

import {
   Container,
   IconContainer,
   InputText,
   WrapperInput,
   NameInput
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps { 
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  textInput?: string;
}

export function Input({iconName, value, textInput, ...rest}: Props) {
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
      { textInput && 
        <NameInput>
         { textInput }
        </NameInput>
      }
      <WrapperInput>
        <IconContainer>
          <Feather name={iconName} size={24} 
          color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail} />
        </IconContainer>
          
        <InputText 
          onFocus={handleInputFocused}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          {...rest}
        />
      </WrapperInput>
    </Container>
  );
}