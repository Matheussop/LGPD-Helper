import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'

import {
   Container,
   InputText,
   WrapperInput,
   NameInput,
   DescriptionWrapper,
   DescriptionButton,
   TextDescripiton,
   Error
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

interface Props extends TextInputProps { 
  label: string;
  value?: string;
  error?: string;
  textDescripiton?: string;
  description?: any;
  more?: boolean;
}

interface Params{
  step: any;
}

export function InputStep({label, value, textDescripiton, description, more=true, error, ...rest}: Props) {
  const theme = useTheme();

  const [isFilled,setIsFilled] = useState(false);
  const [isFocused,setIsFocused] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const {step}  = route.params as Params;

  function handleOpenDetails(){ 
    navigation.navigate('InputDescription', { step, description});
  }

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
         { label }:
        </NameInput>
      }
      <WrapperInput>
        <InputText 
          onFocus={handleInputFocused}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          {...rest}
        />
      </WrapperInput>
      { textDescripiton && 
        <DescriptionWrapper>
          <TextDescripiton>{textDescripiton}</TextDescripiton>
          { more && <DescriptionButton onPress={handleOpenDetails}>
            <Feather name="plus" size={24} color={theme.colors.text_light}/>
          </DescriptionButton>}
        </DescriptionWrapper>
      }
      { error && <Error>{error}</Error>}
    </Container>
  );
}