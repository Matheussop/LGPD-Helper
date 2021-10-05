import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Header } from '../components/Header';
import { Step } from '../screens/Step';
import { HeaderSteps } from '../components/HeaderSteps';
import { StepDetails } from '../screens/StepDetails';
import { useAuth } from '../hooks/auth';
import { Dashboard } from '../screens/Dashboard';
import { RegisterCompany } from '../screens/RegisterCompany';
import { StepDescription } from '../screens/StepDescription';
import { InputDescription } from '../screens/InputDescription';

const { Navigator, Screen } = createStackNavigator();

 export function HomeRoutes() {
  const { user } = useAuth();

  return (
    <Navigator screenOptions={{
      header: props => <Header/>
    }} initialRouteName={user && user.user_type === 'consultor' ? 'Company' : 'Home'} >
      <Screen name="Home" component={Home}
        options={{
          header: props => <Header isBackButton={true} home={true}/>,
        }}
      />
      <Screen name="Company" component={Dashboard}/>
      <Screen name="RegisterCompany" component={RegisterCompany}
        options={{
          header: props => <Header isBackButton={true}/>,
        }}
      />
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
      <Screen name="StepDescription" component={StepDescription} 
        options={{
          header: props => <HeaderSteps/>,
        }}
      />
      <Screen name="InputDescription" component={InputDescription} 
        options={{
          header: props => <HeaderSteps/>,
        }}
      />
      
    </Navigator>
  );
}