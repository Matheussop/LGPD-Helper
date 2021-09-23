import React, {useEffect} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

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
import { useTheme } from 'styled-components';

interface Props extends RectButtonProps{
  data: {
    id?: string;
    title: string;
    type_step: string;
    progress: string ;
    progress_adequacy: string;
  },
  last?: boolean;
}

export function AdequacyStep({data, last=false, ...rest}: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <StatusProgress>
        {/* <StatusCircle/> */}
        <CircularProgress
          value={parseInt(data.progress)}
          radius={40}
          duration={1000}
          valueSuffix={'%'}
          inActiveStrokeOpacity={0.5}
          activeStrokeColor={theme.colors.main}
          textColor={theme.colors.text}
          maxValue={100}
        />
        {!last && <StatusBar/>}
      </StatusProgress>
      <Content>
        <Title>{data.title}</Title>
        <StatusText>{data.progress_adequacy}% de preenchimento</StatusText>
      </Content>
    </Container>
  );
}