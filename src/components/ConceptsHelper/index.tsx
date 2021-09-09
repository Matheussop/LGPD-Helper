import React from 'react';

import {
   Container,
   TitleWrapper,
   Title,
   Text
} from './styles';

interface Props { 
  data: {
    title: string;
    text: string;
    id: string;
  }
}

export function ConceptsHelper({data}: Props) {
  return (
    <Container> 
    <TitleWrapper>
      <Title>{data.title}:</Title>
    </TitleWrapper>
    <Text>
      {data.text}
    </Text>
  </Container>
  );
}