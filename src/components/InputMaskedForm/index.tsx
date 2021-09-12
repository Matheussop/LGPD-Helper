import React from "react";
import { Control, Controller } from "react-hook-form";
import { InputMasked } from "../InputMasked";
import { Feather } from '@expo/vector-icons'
import { TextInputMaskProps } from 'react-native-masked-text'

import { Container, Error } from "./styles";

interface Props extends TextInputMaskProps {
  control: Control;
  name: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  textInput: string;
  error: string;
  // value: string;
  // onChangeText: (value: string) => void;
}

export function InputMaskedForm({ control, name, iconName, textInput, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputMasked iconName={iconName} textInput={textInput} onChangeText={onChange} value={value}  {...rest} />
        )}
        name={name}
      />
      { error && <Error>{error}</Error>}
    </Container>
  );
}
