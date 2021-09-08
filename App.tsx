import React from 'react';

import theme from './src/styles/theme';
import { ThemeProvider } from 'styled-components'

import{
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import{
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
// import { AppProvider } from './src/hooks';
import { LogBox } from 'react-native';
import { AppProvider } from './src/hooks';


LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes/>
      </AppProvider>
    </ThemeProvider>
  );
}


