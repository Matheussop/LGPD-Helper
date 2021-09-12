import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screens/Dashboard';
import { HomeRoutes } from './home.stack.routes';

const { Navigator, Screen } = createStackNavigator();

 export function CompanyRoutes() {
  
  return (
    <Navigator headerMode="none" >
      <Screen name="Dashboard"  component={Dashboard} />
      <Screen name="Home"  component={HomeRoutes} />
    </Navigator>
  );
}