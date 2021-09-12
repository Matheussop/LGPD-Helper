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
   FooterDescription,
   Footer,
   WrapperFooter,
   Info,
} from './styles';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from 'styled-components';
import { InputStep } from '../../components/InputStep';
import { ShowInputStep } from '../../components/ShowInputStep';
import { Button } from '../../components/Button';

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
  const navigation = useNavigation();

  const [value,setValue] = useState('');

  function openDetailsStep(){
    navigation.navigate('StepDetails', { step, });
  }

  return (
    <Container>
      <DescriptionStep>
        <Title>Descrição do Passo</Title>
        <TextDescription>
          Essa etapa da adeguação te como objetivo auxiliar
          a empresa com a criação ou edição de um 
          manual de regras...
        </TextDescription>
        <FooterDescription onPress={() => {console.log('teste')}} >
          <WrapperFooter>
            <Info>Caso queira ver mais detalhes clique aqui</Info>
            <Feather name="plus" size={24} color={theme.colors.text}/>
          </WrapperFooter>
        </FooterDescription>
      </DescriptionStep>
      <InputsSteps>
        <Title>Informações do manual</Title>
        <SubTitle>Informações requisitadas:</SubTitle>
        <FixedInputs>
          <ShowInputStep label={'Informação 1'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 2'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 3'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 4'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 5'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 6'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 7'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 8'} value={'Lorem Ipsulum'}/>
          <ShowInputStep label={'Informação 9'} value={'Lorem Ipsulum'}/>
        </FixedInputs>
        <SubTitle>Arquivos relacionados ao manual: </SubTitle>
        <FilesInputs>

        </FilesInputs>
      </InputsSteps>
      <Footer>
        <Button title={`Detalhe dos dados`} onPress={openDetailsStep} />
      </Footer>
    </Container>
  );
}