import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'
import { format } from 'date-fns';
import { addDays } from 'date-fns'

import {
   Container,
   IconContainer,
   InputText,
   WrapperInput,
   NameInput,
   DataText
} from './styles';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props  { 
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  textInput?: string;
  onChangeDate: (date: string) => void;
}

export function DatePicker({iconName, value, textInput, onChangeDate, ...rest}: Props) {
  const theme = useTheme();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChangeDate(format((currentDate), 'dd/MM/yyyy'));
    setIsFilled(true);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [isFilled,setIsFilled] = useState(false);

  function handleInputBlur(){
    setIsFilled(!!value);
  }

  return (
    <Container >
      { textInput && 
        <NameInput>
         { textInput }
        </NameInput>
      }
      <WrapperInput>
        <IconContainer>
          <Feather name={iconName} size={24} 
          color={ isFilled ? theme.colors.main : theme.colors.text_detail} />
        </IconContainer>

        <InputText 
          onPress={showDatepicker}
          {...rest}
        >
        <DataText>{value}</DataText>
        </InputText>
      </WrapperInput>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
    </Container>
  );
}