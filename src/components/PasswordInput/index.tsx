import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

import {
   Container,
   IconContainer,
   InputText,
   IconEyeContainer
  } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps { 
  iconName: React.ComponentProps<typeof Feather>['name'];
  value: string;
}

export function PasswordInput({iconName,value, ...rest}: Props) {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [isFilled,setIsFilled] = useState(false);
  const [isFocused,setIsFocused] = useState(false);

  function handleInputFocused(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <Container >
      <IconContainer>
        <Feather name={iconName} size={24}
        color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail} />
      </IconContainer>
        
      <InputText {...rest}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        autoCorrect={false}
        secureTextEntry={isPasswordVisible}
        isFocused={isFocused}/>

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconEyeContainer isFocused={isFocused}>
          <Feather name={isPasswordVisible ? 'eye' : 'eye-off' } size={24} color={theme.colors.text_detail} />
        </IconEyeContainer>
      </BorderlessButton>
    </Container>
  );
}