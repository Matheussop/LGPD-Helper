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

interface Props { 
  data: {
    title: string;
    text: string;
    id: string;
    moreInfo: boolean;
  }
}

export function SectionHelper({data}: Props) {
  const theme = useTheme();

  return (
    <Container> 
      <TitleWrapper>
        <Title>{data.title}</Title>
      </TitleWrapper>
      <TextBox>
        <Text>
          {data.text}
        </Text>
        <Footer onPress={() => {}} >
          <WrapperFooter>
            <Info>Caso queira ver mais detalhes clique aqui</Info>
            <Feather name="plus" size={24} color={theme.colors.text}/>
          </WrapperFooter>
        </Footer>
      </TextBox>
    </Container>
  );
}