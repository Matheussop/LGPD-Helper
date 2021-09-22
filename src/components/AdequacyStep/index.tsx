import React from 'react';
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
    title: string;
    type_step: string;
    progress?: number;
    progress_adequacy?: number;
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
          value={data.progress}
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
        {/* <StatusText>{data.statusText}</StatusText> */}
      </Content>
    </Container>
  );
}