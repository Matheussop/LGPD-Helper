import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from "@expo/vector-icons";


import {
   Container,
   Content,
   TextInfo,
   TitleConcepts,
   ListSection,
   ListConcepts,
} from './styles';
import { SectionHelper } from '../../components/SectionHelper';
import { ConceptsHelper } from '../../components/ConceptsHelper';
import { Header } from '../../components/Header';

export interface IHelperSection { 
  title: string;
  text: string;
  id: string;
  moreInfo: boolean;
}

export interface IConcepts{
  title: string,
  text: string,
  id: string,
}

const dataConcepts: IConcepts[] = [
  {
    title: 'Privacidade',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a! Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    id: '1',
  },
  {
    title: 'Finalidade',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a! Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    id: '2',
  },
  {
    title: 'Controlador',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a! Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    id: '3',
  },
]

const data: IHelperSection[] = [
  { 
    title: 'O que é a LGPD',
    text: 'LGPD é a sigla para Lei Geral de Proteção de Dados do Brasil. O principal objetivo da LGPD é dar às pessoas maior controle sobre suas próprias informações. A lei estabelece regras para empresas e organizações sobre coleta,uso, armazenamento e compartilhamento de dados pessoais, impondo multas e sanções no caso de descumprimento.',
    id: '1',
    moreInfo: true,
  },
  {
    title: 'A quem a lei se aplica ?',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a!',
    id: '2',
    moreInfo: true,
  },
  {
    title: 'Quando se deu inicio sua vigencia ?',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi enim quasi delectus dolores ex id eius fugiat ratione a!',
    id: '3',
    moreInfo: true,
  }
]

export function Helper() {
  const theme = useTheme();

  function handleSignOut(){
    Alert.alert('Tem certeza ?', 'Lembre-se, que se você sair, irá precisar de internet para conectar-se novamente.',[
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => {},
      }
    ]);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <TextInfo>
          Esta seção tem como objetivo apresentar termos importantes 
          presentes na LGPD e retirar algumas dúvidas gerais.
        </TextInfo>

        {
          data.map(item => (
            <SectionHelper data={item} key={item.id}/>
          ))
        }
        <TitleConcepts>
          Conceitos Importantes:
        </TitleConcepts>
        {
          dataConcepts.map(item => (
            <ConceptsHelper data={item} key={item.id}/>
          ))
        }
        {/* 
          O codigo abaixo utiliza FlatList para renderizar os itens, porem
          esta entrando em conflito com o ScrollView, analisar se é possivel utilizar 
          ambos juntos
          <ListSection
            data={data}
            keyExtractor={(key) => key.id}
            renderItem={({ item }) => 
              <SectionHelper data={item}/>
            }
          />
          <ListConcepts
            data={dataConcepts}
            keyExtractor={(key) => key.id}
            renderItem={({ item }) => 
              <ConceptsHelper data={item}/>
            }
          /> 
        */}
      </Content>
    </Container>
    
  );
}