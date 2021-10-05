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
  description: any;
}

export function InputDescription() {
  const route = useRoute();
  const {description}  = route.params as Params;
  
  useEffect(() => {
    // console.log(description);
  }, []);

  return (
    <Container> 
      <TitleWrapper>
        <Title>{description.title}</Title>
      </TitleWrapper>
      <TextBox>
        <Text>
          {description.text}
        </Text>
      </TextBox>
    </Container>
  );
}