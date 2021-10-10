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
  title: string;
  text: string;
  id: string;
  moreInfo: boolean;
  simpleText: string;
  MoreTexts: [];
}

export function SectionDetails() {
  const route = useRoute();
  const data = route.params as Params;

  useEffect(() => {
    // console.log(data)
  }, []);

  return (
    <Container>
      {!data.MoreTexts &&
        <>
          <TitleWrapper>
            <Title>{data.title}</Title>
          </TitleWrapper>
          <TextBox>
            <Text>
              {data.text}
            </Text>
          </TextBox>
        </>
      }
      {data.MoreTexts &&
        data.MoreTexts.map((item: any, index: number) => {
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