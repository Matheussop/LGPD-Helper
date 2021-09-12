import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components' 
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { HelperRoutes } from './helper.stack.routes';
import { HomeRoutes } from './home.stack.routes';
import { ProfileRoutes } from './profile.stack.routes';
import { Dashboard } from '../screens/Dashboard';
import { CompanyRoutes } from './company.routes';

const { Navigator, Screen } = createBottomTabNavigator();
 export function ConsultRoutes() {
  const theme = useTheme();
  return (
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.main,
          tabBarInactiveTintColor: theme.colors.text_light,
          tabBarStyle: {
            paddingVertical: Platform.OS == 'ios' ? 20 : 0,
            height: 60,
          }
        }}
        initialRouteName="Home"
      >
        <Screen name="Adicionar" component={HelperRoutes} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="add" color={color} size={size}/>
            ))
          }}
        />
        <Screen name="Listagem" component={CompanyRoutes} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="format-list-bulleted" color={color} size={size}/>
            ))
          }}
        />
        <Screen name="Configurações" component={ProfileRoutes} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="settings" color={color} size={size}/>
            ))
          }}
        />
      </Navigator>
  );
}