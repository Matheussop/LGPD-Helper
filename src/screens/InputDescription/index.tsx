import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View } from 'react-native';

import {
  Container,
  TitleWrapper,
  Title,
  TextBox,
  Text,
  Info
} from './styles';

interface Params {
  description: any;
}

export function InputDescription() {
  const route = useRoute();
  const { description } = route.params as Params;

  useEffect(() => {
    // console.log(description);
  }, []);

  return (
    <Container>
      {!description.moreText &&
        <>
          <TitleWrapper>
            <Title>{description.title}</Title>
          </TitleWrapper>
          <TextBox>
            <Text>
              {description.text}
            </Text>
          </TextBox>
        </>
      }
      {description.moreText &&
        description.moreText.map((item: any, index: number) => {
          return (
            <View key={index}>
              <TitleWrapper>
                <Title>{item['Titulo']}</Title>
              </TitleWrapper>
              <TextBox>
                <Text>
                  {item['text']}
                </Text>
              </TextBox>
            </View>
          )
        })}
    </Container>
  );
}