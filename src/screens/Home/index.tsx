import React from 'react';
import { Feather } from "@expo/vector-icons";

import {
   Container,
   Header,
   TitleWreapper,
   ImageProfile,
   Title,
   LogoutButton,
   Content,
   TextInfo,
   ListSteps,
} from './styles';
import { Alert, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import { AdequacyStep } from '../../components/AdequacyStep';

const data = [
  {title: 'Adeguação Manual de Regras',statusText: 'Completo', progress: 20},
  {title: 'Política de dados',statusText: 'Completo', progress: 20},
  {title: 'Currículo',statusText: 'Completo', progress: 20},
  {title: 'Termo de desligamento',statusText: 'Completo', progress: 20},
  {title: 'Imagens',statusText: 'Completo', progress: 20},
]

export function Home() {
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
      <Header>
        <TitleWreapper>
          <ImageProfile source={{uri : 'https://avatars.githubusercontent.com/u/36748285?v=4'}}/>
          <Title>Olá {'\n'} Matheus</Title>
        </TitleWreapper>
        <LogoutButton onPress={handleSignOut}>
          <Feather name="power" size={24} color={theme.colors.shape}/>
        </LogoutButton>
      </Header>
      <Content>
        <TextInfo>
          Para ver mais detalhes sobre uma adequação basta
          clicar nela que será redirecionado para a página
          de detalhe da adequação.
        </TextInfo>
        <ListSteps
        data={data}
        keyExtractor={(key) => key.title}
        renderItem={({ item, index}) => 
          <View> 
            {index === data.length-1 ? 
              <AdequacyStep data={item} last={true}/> 
            : 
              <AdequacyStep data={item}/> 
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