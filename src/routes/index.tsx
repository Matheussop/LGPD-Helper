import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';

import { useAuth } from '../hooks/auth'
import { ConsultRoutes } from './consult.stack.routes';
export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ?  user.user_type === 'consultor'?   <ConsultRoutes/> : <AppTabRoutes/>  
      : <AuthRoutes/> }
    </NavigationContainer>
  )
}