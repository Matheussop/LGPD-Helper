import React, {useState} from 'react';
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
   Footer,
   WrapperFooter,
   Info,
} from './styles';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from 'styled-components';
import { InputStep } from '../../components/InputStep';
import { ShowInputStep } from '../../components/ShowInputStep';

export interface IStep{
  title: string;
  statusText: string;
  progress?: number;
}

export interface Params{
  step: IStep;
}

export function Step() {
  const route = useRoute();
  const {step} = route.params as Params;
  const theme = useTheme();

  const [value,setValue] = useState('');


  return (
    <Container>
      <DescriptionStep>
        <Title>Descrição do Passo</Title>
        <TextDescription>
          Essa etapa da adeguação te como objetivo auxiliar
          a empresa com a criação ou edição de um 
          manual de regras...
        </TextDescription>
        <Footer onPress={() => {console.log('teste')}} >
          <WrapperFooter>
            <Info>Caso queira ver mais detalhes clique aqui</Info>
            <Feather name="plus" size={24} color={theme.colors.text}/>
          </WrapperFooter>
        </Footer>
      </DescriptionStep>
      <InputsSteps>
        <Title>Informações do manual</Title>
        <SubTitle>Informações requisitadas:</SubTitle>
        <FixedInputs>
          <InputStep value={value} onChangeText={setValue} label={'Informação 1'}/>
          <ShowInputStep label={'Informação 1'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 2'} value={'Lorem Ipsulum'}/>
         
        </FixedInputs>
        <SubTitle>Arquivos relacionados ao manual: </SubTitle>
        <FilesInputs>
         
        </FilesInputs>
      </InputsSteps>
    </Container>
  );
}