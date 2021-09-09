import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Header } from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

 export function HomeRoutes() {
  
  return (
    <Navigator screenOptions={{
      header: props => <Header/>
    }}>
      <Screen name="Home"  component={Home} />
    </Navigator>
  );
}