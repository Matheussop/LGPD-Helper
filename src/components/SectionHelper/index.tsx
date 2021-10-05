import React from 'react';
import { Feather } from "@expo/vector-icons";


import {
   Container,
   TitleWrapper,
   Title,
   TextBox,
   Text,
   Footer,
   Info,
   WrapperFooter
} from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';

interface Props { 
  data: {
    title: string;
    text: string;
    id: string;
    moreInfo: boolean;
    simpleText: string;
  }
}

export function SectionHelper({data}: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleOpenDetails(){
    navigation.navigate('SectionDetails', data);
  }

  return (
    <Container> 
      <TitleWrapper>
        <Title>{data.title}</Title>
      </TitleWrapper>
      <TextBox>
        <Text>
          {data.simpleText}
        </Text>
        <Footer onPress={handleOpenDetails} >
          <WrapperFooter>
            <Info>Caso queira ver mais detalhes clique aqui</Info>
            <Feather name="plus" size={24} color={theme.colors.text}/>
          </WrapperFooter>
        </Footer>
      </TextBox>
    </Container>
  );
}