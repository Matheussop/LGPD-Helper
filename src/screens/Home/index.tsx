import React, {useEffect} from 'react';

import {
   Container,
   Content,
   TextInfo,
   ListSteps,
} from './styles';
import { Alert, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import { AdequacyStep } from '../../components/AdequacyStep';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from '../../hooks/auth';
import api from "../../services/api";

export interface IStep{
  title: string;
  statusText: string;
  progress?: number;
}

const data: IStep[] = [
  {title: 'Adequação Manual de Regras',statusText: '100% preenchido', progress: 100},
  {title: 'Política de dados',statusText: '80% preenchido', progress: 80},
  {title: 'Currículo',statusText: '60% preenchido', progress: 50},
  {title: 'Termo de desligamento',statusText: '35% preenchido', progress: 30},
  {title: 'Imagens',statusText: '10% preenchido', progress: 10},
  {title: 'Biometria',statusText: '0% preenchido', progress: 0},
]

export function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params ;

  useEffect(() => {
    if(!item){
      async function getCompany(){
        const apiWithToken = await api();
        const response = await apiWithToken.get('/company/user')
        .then((response) => {
          if(!response.data){
            navigation.navigate('RegisterCompany');
          }
        })
        .catch((error) => {
          if (error.response) { // get response with a status code not in range 2xx
            Alert.alert((error.response.status + ''),error.response.data.message);
          }
        });
      }
      getCompany();
    }
  }, [])

  function handleOpenStep(step: IStep){
    navigation.navigate('Step', { step,  name: 'Custom profile header'});
  }
  
  return (
    <Container>
      <StatusBar barStyle="light-content"
       backgroundColor="transparent"
       translucent
      />
      <Content>
        <TextInfo>
          Para ver mais detalhes sobre uma adequação basta
          clicar nela que será redirecionado para a página
          de detalhe da adequação. {'\n'} Obs: O número dentro do 
          circulo índica a porcentagem de adequação 
        </TextInfo>
        <ListSteps
        data={data}
        keyExtractor={(key) => key.title}
        renderItem={({ item , index}) => 
          <View> 
            {index === data.length-1 ? 
              <AdequacyStep data={item} last={true} onPress={() => handleOpenStep(item)}/> 
            : 
              <AdequacyStep data={item} onPress={() => handleOpenStep(item)}/> 
            }
          </View>
        }
        showsVerticalScrollIndicator={false}
        // onViewableItemsChanged={indexChanged.current}
      />
      </Content>
    </Container>
  );
}