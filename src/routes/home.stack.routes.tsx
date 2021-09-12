import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Header } from '../components/Header';
import { Step } from '../screens/Step';
import { HeaderSteps } from '../components/HeaderSteps';
import { StepDetails } from '../screens/StepDetails';

const { Navigator, Screen } = createStackNavigator();

 export function HomeRoutes() {
  
  return (
    <Navigator screenOptions={{
      header: props => <Header/>
    }}  >
      <Screen name="Home" component={Home} />
      <Screen name="Step" component={Step} 
        options={{
          header: props => <HeaderSteps/>,
        }}
      />
      <Screen name="StepDetails" component={StepDetails} 
        options={{
          header: props => <HeaderSteps/>,
        }}
      />
      
    </Navigator>
  );
}