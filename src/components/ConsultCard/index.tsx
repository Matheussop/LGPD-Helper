import React from "react";
import { useTheme } from 'styled-components';
import { ProgressBar } from 'react-native-paper';

import {
  Container,
  Title,
  Footer,
  Date,
  DescriptionBar
} from "./styles";

export interface ConsultCardData {
  name: string;
  date: string;
  progress: number;
}

interface IProps {
  data: ConsultCardData
}

export function ConsultCard({ data }: IProps) {
  const theme = useTheme();

  return (
    <Container>
      <Title>{data.name}</Title>
      <ProgressBar progress={data.progress/100} color={theme.colors.main} style={{
        height: 15, borderRadius: 10
      }}/> 
      <Footer>
        <DescriptionBar>{data.progress}% concluída</DescriptionBar>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
