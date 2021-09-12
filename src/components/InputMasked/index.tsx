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
import { TextInputMaskProps } from 'react-native-masked-text'

interface Props extends TextInputMaskProps { 
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  textInput?: string;
  onChangeText: (value: string) => void;
}

export function InputMasked({iconName, value, textInput, onChangeText, ...rest}: Props) {
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
          onChangeText={onChangeText}
          value={value}
          {...rest}
        />
      </WrapperInput>
    </Container>
  );
}