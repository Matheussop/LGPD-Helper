import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  DescriptionWrapper,
  TextDescripiton,
  DescriptionButton,
  PickerInput,
  WrapperInput,
  NameInput,
} from "./styles";
import { useTheme } from "styled-components";
import { PickerProps } from "react-native";
import { Picker } from "@react-native-picker/picker";

export interface IPickerOptions {
  label: string;
  value: string;
}

interface Props extends PickerProps {
  value?: string;
  options: IPickerOptions[] | undefined;
  label?: string;
  textDescripiton?: string;
  description?: any;
  more?: boolean;
  defaultValue?: string;
  onValueChange: (value: any) => void;
}

interface Params{
  step: any;
}

export function SelectInput({
  options,
  label,
  textDescripiton,
  description,
  more = true,
  defaultValue,
  onValueChange,
  ...rest
}: Props) {
  const theme = useTheme();
  const [value,setValue] = useState(defaultValue);
  const navigation = useNavigation();
  const route = useRoute();

  const {step}  = route.params as Params;

  function handleOpenDetails(){ 
    navigation.navigate('InputDescription', { step, description});
  }

  return (
    <Container>
      {label && <NameInput>{label}</NameInput>}
      <WrapperInput>
        <PickerInput
          selectedValue={value}
          onValueChange={(item) => {onValueChange(item), setValue(item + '')}}
          {...rest}
        >
          {options &&
            options.map((item) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
        </PickerInput>
      </WrapperInput>
      {textDescripiton && (
        <DescriptionWrapper>
          <TextDescripiton>{textDescripiton}</TextDescripiton>
          {more && (
            <DescriptionButton onPress={handleOpenDetails}>
              <Feather name="plus" size={24} color={theme.colors.text_light} />
            </DescriptionButton>
          )}
        </DescriptionWrapper>
      )}
    </Container>
  );
}
