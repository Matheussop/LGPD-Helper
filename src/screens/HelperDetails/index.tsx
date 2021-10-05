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
  title: string;
  text: string;
  id: string;
  moreInfo: boolean;
  simpleText: string;
}

export function SectionDetails() {
  const route = useRoute();
  const data  = route.params as Params;

  return (
    <Container> 
      <TitleWrapper>
        <Title>{data.title}</Title>
      </TitleWrapper>
      <TextBox>
        <Text>
          {data.text}
        </Text>
      </TextBox>
    </Container>
  );
}