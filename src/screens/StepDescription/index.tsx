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

interface Params{
  info: {
    id?: string;
    moreInfo: boolean;
    simpleText: string;
    text: string;
    title: string;
    MoreTexts: [];
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
    {!info.MoreTexts &&
      <>
        <TitleWrapper>
          <Title>{info.title}</Title>
        </TitleWrapper>
        <TextBox>
          <Text>
            {info.text}
          </Text>
        </TextBox>
      </>
    }
    {info.MoreTexts &&
      info.MoreTexts.map((item: any, index: number) => {
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