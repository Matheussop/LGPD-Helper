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
import { BorderlessButtonProps } from "react-native-gesture-handler";

export interface ConsultCardData {
  name: string;
  date_last_edit: Date | string;
  progress: number;
}

interface IProps extends BorderlessButtonProps{
  data: ConsultCardData
}

export function ConsultCard({ data, ...rest} : IProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Title>{data.name}</Title>
      <ProgressBar progress={data.progress/100} color={theme.colors.main} style={{
        height: 15, borderRadius: 10
      }}/> 
      <Footer>
        <DescriptionBar>{data.progress.toFixed(0)}% concluída</DescriptionBar>
        <Date>{data.date_last_edit}</Date>
      </Footer>
    </Container>
  );
}
