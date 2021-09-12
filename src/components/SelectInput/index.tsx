import React from "react";
import { Feather } from "@expo/vector-icons";

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
  value: string;
  options: IPickerOptions[] | undefined;
  label?: string;
  textDescripiton?: string;
  more?: boolean;
  onValueChange: (value: any) => void;
}

export function SelectInput({
  value,
  options,
  label,
  textDescripiton,
  more,
  onValueChange,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container>
      {label && <NameInput>{label}</NameInput>}
      <WrapperInput>
        <PickerInput
          selectedValue={value}
          onValueChange={onValueChange}
          {...rest}
        >
          {options &&
            options.map((item) => (
              <Picker.Item label={item.label} value={item.value} />
            ))}
        </PickerInput>
      </WrapperInput>
      {textDescripiton && (
        <DescriptionWrapper>
          <TextDescripiton>{textDescripiton}</TextDescripiton>
          {more && (
            <DescriptionButton>
              <Feather name="plus" size={24} color={theme.colors.text_light} />
            </DescriptionButton>
          )}
        </DescriptionWrapper>
      )}
    </Container>
  );
}
