import React, { useState, useEffect } from 'react';
import { Feather } from "@expo/vector-icons";

import {
  Container,
  DescriptionStep,
  Title,
  SubTitle,
  TextDescription,
  InputsSteps,
  FixedInputs,
  FilesInputs,
  FooterDescription,
  Footer,
  WrapperFooter,
  Info,
} from './styles';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import { useTheme } from 'styled-components';
import { InputStep } from '../../components/InputStep';
import { ShowInputStep } from '../../components/ShowInputStep';
import { Button } from '../../components/Button';
import api from "../../services/api";
import { ActivityIndicator, Alert, View } from 'react-native';
import { LoadContainer } from '../Dashboard/styles';
import { getInputs } from '../../utils/GetInputs';

export interface IStep {
  id?: string;
  title: string;
  type_step: string;
  progress: string;
  progress_adequacy: string;
}

export interface Params {
  step: IStep;
}

export interface IStepParams {
  id?: string;
  inputs: any;
  type_step: string;
  id_step?: string;
  id_info: string;
  info?: {
    id?: string;
    moreInfo: boolean;
    simpleText: string;
    text: string;
    title: string;
  }
}

export function Step() {
  const route = useRoute();
  const { step } = route.params as Params;
  const theme = useTheme();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const [stepDetail, setStepDetail] = useState<IStepParams>({} as IStepParams);
  const [value, setValue] = useState('');
  const screenIsFocus = useIsFocused();

  function openDetailsStep() {
    navigation.navigate('StepDetails', { step, inputs: stepDetail.inputs, id: stepDetail.id });
  }

  function handleOpenDescriptionStep() {
    const info = stepDetail.info;
    navigation.navigate('StepDescription', { step, info});
  }

  useEffect(() => {
    async function confirmCreateStepDetails() {
      const apiWithToken = await api();
      await apiWithToken.get(`/stepDetails/${step.id}`)
        .then(async (response) => {
          if (!response.data) {
            const data = {
              id_step: step.id,
              type_step: step.type_step,
              inputs: getInputs(step.type_step)
            }

            await apiWithToken.post(`/stepDetails`, data)
              .then(async (response) => {
                if (response.data) {
                  confirmCreateStepDetails();
                }
              })
              .catch((error) => {
                if (error.response) { // get response with a status code not in range 2xx
                  Alert.alert((error.response.status + ''), error.response.data.message);
                }
              });
          } else {
            setStepDetail(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (error.response) { // get response with a status code not in range 2xx
            Alert.alert((error.response.status + ''), error.response.data.message);
          }
        });
    }
    if(screenIsFocus)
    confirmCreateStepDetails();
  }, [screenIsFocus]);

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color={theme.colors.main} />
        </LoadContainer>
      ) : (
        <>
          <DescriptionStep>
            <Title>{stepDetail.info && stepDetail.info.title}</Title>
            <TextDescription>
              {stepDetail.info && stepDetail.info.simpleText}
            </TextDescription>
            <FooterDescription onPress={handleOpenDescriptionStep} >
              <WrapperFooter>
                <Info>Caso queira ver mais detalhes clique aqui</Info>
                <Feather name="plus" size={24} color={theme.colors.text} />
              </WrapperFooter>
            </FooterDescription>
          </DescriptionStep>
          <InputsSteps>
            <Title>Informações do manual</Title>
            <SubTitle>Informações requisitadas:</SubTitle>
            <FixedInputs>
              {stepDetail.inputs.map((item: any, index: number) => (
                <ShowInputStep key={index} label={Object.getOwnPropertyNames(item)[0]} value={item[Object.keys(item)[0]]}/>
              ))}
            </FixedInputs>
            {/* <SubTitle>Arquivos relacionados ao manual: </SubTitle>
            <FilesInputs>

            </FilesInputs> */}
          </InputsSteps>
          <Footer>
            <Button title={`Detalhe dos dados`} onPress={openDetailsStep} />
          </Footer>
        </>
      )}
    </Container>
  );
}