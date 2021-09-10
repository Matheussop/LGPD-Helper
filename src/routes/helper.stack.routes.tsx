import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Helper } from '../screens/Helper';
import { Header } from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

 export function HelperRoutes() {
  
  return (
    <Navigator 
      screenOptions={{
        header: props => <Header/>
      }}
    >
      <Screen name="Helper"  component={Helper}/>
    </Navigator>
  );
}