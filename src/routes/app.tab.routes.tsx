import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components' 
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { Home } from '../screens/Home';
import { HelperRoutes } from './helper.stack.routes';
import { HomeRoutes } from './home.stack.routes';
import { Profile } from '../screens/Profile';
import { ProfileRoutes } from './profile.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();
 export function AppTabRoutes() {
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
      >
        <Screen name="Ajuda" component={HelperRoutes} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="help" color={color} size={size}/>
            ))
          }}
        />
        <Screen name="Home" component={HomeRoutes} 
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