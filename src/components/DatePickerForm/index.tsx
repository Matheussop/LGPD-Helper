import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Container, Error } from "./styles";
import { DatePicker } from "../DatePicker";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  textInput: string;
  error: string;
}

export function DatePickerForm({ control, name, iconName, textInput, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker iconName={iconName} textInput={textInput} onChangeDate={onChange} value={value}  {...rest} />
        )}
        name={name}
      />
      { error && <Error>{error}</Error>}
    </Container>
  );
}
