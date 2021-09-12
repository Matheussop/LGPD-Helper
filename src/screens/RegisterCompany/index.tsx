import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { Container, Form } from "./styles";
import { InputForm } from "../../components/InputForm";
import { DatePickerForm } from "../../components/DatePickerForm";



interface FormData {
  companyName: string;
  cnpj: string;
  dateInitConsult: string;
  address: string;
  category: string;
}

export function RegisterCompany() {
  const theme = useTheme();

  const schema = Yup.object().shape({
    companyName: Yup.string().required("Nome é obrigatório"),
    cnpj: Yup
    .string()
    // .matches(
    //   /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
    //   "CPNJ inválido"
    //   ),
    .required("O CNPJ é obrigatório"),
    dateInitConsult: Yup.string().required(
      "A data de ínicio da consultoria é obrigatório"
    ),
    address: Yup.string(),
    category: Yup.string(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {
    const newCompany = {
      companyName: form.companyName,
      cnpj: form.cnpj,
      dateInitConsult: form.dateInitConsult,
      address: form.address,
      category: form.category,
    };

    try {
      reset();
      console.log(newCompany);
    } catch (error) {
      Alert.alert("Não foi possível salvar as informações");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Form>
          <InputForm
            name="companyName"
            iconName="user"
            textInput="Nome Empresa"
            control={control}
            error={errors.companyName && errors.companyName.message}
          />
          <InputForm
            name="cnpj"
            iconName="briefcase"
            textInput="Cnpj"
            control={control}
            error={errors.cnpj && errors.cnpj.message}
          />
          <DatePickerForm
            name="dateInitConsult"
            iconName="calendar"
            textInput="Data inicio auditória"
            control={control}
            error={errors.dateInitConsult && errors.dateInitConsult.message}
          />
          <InputForm
            name="address"
            iconName="map-pin"
            textInput="Endereço (Opcional)"
            control={control}
            error={errors.address && errors.address.message}
          />
          <InputForm
            name="category"
            iconName="clipboard"
            textInput="Categoria"
            control={control}
            error={errors.category && errors.category.message}
          />
        </Form>
        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleRegister)}
          color={theme.colors.main_dark}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
