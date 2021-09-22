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
import { InputMaskedForm } from "../../components/InputMaskedForm";
import api from "../../services/api";


interface FormData {
  companyName: string;
  cnpj: string;
  dateInitConsult: string;
  address: string;
  category: string;
}

interface IError{
  statusCode: string;
  message: string;
}

export function RegisterCompany() {
  const theme = useTheme();
  const schema = Yup.object().shape({
    companyName: Yup.string().required("Nome é obrigatório"),
    cnpj: Yup
    .string()
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "CPNJ inválido"
    )
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
    let datePieces = form.dateInitConsult.split("/");
    const date = new Date(parseInt(datePieces[2]), (parseInt(datePieces[1]) - 1), parseInt(datePieces[0]));
    const newCompany = {
      name: form.companyName,
      cnpj: form.cnpj,
      date_init_consult: date,
      address: form.address,
      category: form.category,
    };
    const apiWithToken = await api();
    const response = await apiWithToken.post('/company', newCompany)
    .then((response) => {
      Alert.alert('Criado com sucesso', `A empresa ${response.data.name} foi criada`);
    })
    .catch((error) => {
      if (error.response) { // get response with a status code not in range 2xx
        Alert.alert((error.response.status + ''),error.response.data.message);
      }
    });
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
          <InputMaskedForm
            name="cnpj"
            iconName="clipboard"
            type="cnpj"
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
            iconName="tag"
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
