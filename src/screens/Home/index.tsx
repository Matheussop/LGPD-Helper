import React, {useEffect, useState} from 'react';

import {
   Container,
   Content,
   TextInfo,
   ListSteps,
} from './styles';
import { ActivityIndicator, Alert, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import { AdequacyStep } from '../../components/AdequacyStep';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from '../../hooks/auth';
import api from "../../services/api";
import { LoadContainer } from '../Dashboard/styles';


export interface IStep{
  id?: string;
  title: string;
  type_step: string;
  progress: string;
  progress_adequacy: string;
}

const data: IStep[] = [
  {title: 'Adequação Manual de Regras',type_step: '1', progress: '0', progress_adequacy: '0'},
  {title: 'Política de dados',type_step: '2', progress: '0', progress_adequacy: '0'},
  {title: 'Currículo',type_step: '3', progress: '0', progress_adequacy: '0'},
  {title: 'Termo de desligamento',type_step: '4', progress: '0', progress_adequacy: '0'},
  {title: 'Imagens',type_step: '5', progress: '0', progress_adequacy: '0'},
  {title: 'Biometria',type_step: '6', progress: '0', progress_adequacy: '0'},
]

export function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  const theme = useTheme();
  const [hasCompany, setHasCompany] = useState(false);
  const [hasSteps, setHasSteps] = useState(false);
  const [steps, setSteps] = useState<IStep[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!item){
      async function getCompany(){
        const apiWithToken = await api();
        await apiWithToken.get('/company/user')
        .then((response) => {
          if(!response.data){
            navigation.navigate('RegisterCompany');
          }else{
            setHasCompany(true);
          }
        })
        .catch((error) => {
          if (error.response) { // get response with a status code not in range 2xx
            Alert.alert((error.response.status + ''),error.response.data.message);
          }
        });
      }
      getCompany();
    }else{
      setHasCompany(true);
    }
  }, [])


  useEffect(() => {
    if(hasCompany){
      async function confirmCreateStep(){
        const apiWithToken = await api();
        await apiWithToken.get('/step')
        .then(response =>{
          if(response.data.length === 0){
            let flag = 0;
            data.map(async (item) => {
              await apiWithToken.post('/step',item)
              .then((response) => {
                if(response.data){
                  flag++;
                  if(flag === 6){
                    Alert.alert("Sucesso", "Etapas criadas com sucesso");
                    setHasSteps(true);
                  }
                }
              })
              .catch((error) => {
                if (error.response) { // get response with a status code not in range 2xx
                  Alert.alert((error.response.status + ''),error.response.data.message);
                }else {
                  Alert.alert("Error", "Error durante a criação das etapas");
                }
              });
            })
           
          }else{
            setSteps(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (error.response) { // get response with a status code not in range 2xx
            Alert.alert((error.response.status + ''),error.response.data.message);
          }
        });
      }
      confirmCreateStep();
    }
  }, [hasCompany,hasSteps])

  function handleOpenStep(step: IStep){
    navigation.navigate('Step', { step,  name: 'Custom profile header'});
  }
  
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
          Para ver mais detalhes sobre uma adequação basta
          clicar nela que será redirecionado para a página
          de detalhe da adequação. {'\n'} Obs: O número dentro do 
          circulo índica a porcentagem de adequação 
        </TextInfo>
        <ListSteps
        data={steps}
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
      )}
    </Container>
  );
}