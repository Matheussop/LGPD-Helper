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
  data: {
    id: string; 
  } 
}

export function StepDescription() {
  const route = useRoute();
  const {data}  = route.params as Params;
  
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Container> 
      <TitleWrapper>
        {/* <Title>{data.title}</Title> */}
      </TitleWrapper>
      <TextBox>
        <Text>
          {/* {data.text} */}
        </Text>
      </TextBox>
    </Container>
  );
}