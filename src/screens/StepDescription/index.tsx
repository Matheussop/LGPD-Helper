import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';

import {
  Container,
  TitleWrapper,
  Title,
  TextBox,
  Text,
  Info
} from './styles';

interface Params{
  info: {
    id?: string;
    moreInfo: boolean;
    simpleText: string;
    text: string;
    title: string;
  }
}

export function StepDescription() {
  const route = useRoute();
  const {info}  = route.params as Params;
  
  useEffect(() => {
    // console.log(info);
  }, []);

  return (
    <Container> 
      <TitleWrapper>
        <Title>{info.title}</Title>
      </TitleWrapper>
      <TextBox>
        <Text>
          {info.text}
        </Text>
      </TextBox>
    </Container>
  );
}