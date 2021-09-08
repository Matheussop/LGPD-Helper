import React from 'react';

import {
  Container,
  StatusProgress,
  Title,
  StatusCircle,
  StatusBar,
  Content,
  StatusText
} from './styles';
import { RectButtonProps } from "react-native-gesture-handler"

interface Props extends RectButtonProps{
  data: {
    title: string;
    statusText: string;
    progress?: number;
  },
  last?: boolean;
}

export function AdequacyStep({data, last=false, ...rest}: Props) {
  return (
    <Container {...rest}>
      <StatusProgress>
        <StatusCircle/>
        {!last && <StatusBar/>}
      </StatusProgress>
      <Content>
        <Title>{data.title}</Title>
        <StatusText>{data.statusText}</StatusText>
      </Content>
    </Container>
  );
}