import React, {useEffect, useState} from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { useNetInfo } from '@react-native-community/netinfo';


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
import api from '../../services/api';
import { LoadContainer } from '../Dashboard/styles';

export interface IHelperSection { 
  title: string;
  text: string;
  id: string;
  moreInfo: boolean;
  simpleText: string;
}

export interface IConcepts{
  title: string,
  text: string,
  id: string,
}

export function Helper() {
  const theme = useTheme();
  const netInfo = useNetInfo();
  const [infos, setInfo] = useState<IHelperSection[]>([]);
  const [concepts, setConcepts] = useState<IHelperSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      const apiWithToken = await api();
      const responseInfos = await apiWithToken.get('/infos')
      const dataInfos = responseInfos && responseInfos.data as IHelperSection[];
      setInfo(dataInfos);
      
      const responseConcepts = await apiWithToken.get('/concepts')
      const dataConcepts = responseConcepts && responseConcepts.data as IHelperSection[];
      setConcepts(dataConcepts);
      
      setIsLoading(false);
    }

    if(netInfo.isConnected === true){
      fetchData();
    }
  
  }, [netInfo.isConnected])


  return (
    <Container>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color={theme.colors.main} />
        </LoadContainer>
      ) : (
      <Content>
        <TextInfo>
          Esta seção tem como objetivo apresentar termos importantes 
          presentes na LGPD e retirar algumas dúvidas gerais.
        </TextInfo>

        {
          infos.map((item) => 
            <SectionHelper data={item} key={item.id}/>
          )
        }
        <TitleConcepts>
          Conceitos Importantes:
        </TitleConcepts>
        {
          concepts.map(item => (
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
      )}
    </Container>
    
  );
}