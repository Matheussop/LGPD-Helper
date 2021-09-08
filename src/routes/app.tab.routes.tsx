import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components' 
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();
 export function AppTabRoutes() {
  const theme = useTheme();
  return (
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.main,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarStyle: {
            paddingVertical: Platform.OS == 'ios' ? 20 : 0,
            height: 60,
          }
        }}
      >
        <Screen name="teste" component={Home} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="format-list-bulleted" color={color} size={size}/>
            ))
          }}
        />
        <Screen name="Home" component={Home} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="home" color={color} size={size}/>
            ))
          }}
        />
        <Screen name="teste2" component={Home} 
          options={{
            tabBarIcon: (({ size, color}) => (
              <MaterialIcons name="pie-chart" color={color} size={size}/>
            ))
          }}
        />
      </Navigator>
  );
}