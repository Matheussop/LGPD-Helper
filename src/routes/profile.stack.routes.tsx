import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "../screens/Profile";
import { Header, Title, LogoutButton } from "../screens/Profile/styles";
import { Alert, StatusBar, View } from "react-native";
import { HeaderTop } from "../screens/Profile/styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createStackNavigator();

export function ProfileRoutes() {
  const theme = useTheme();
  const {signOut} = useAuth();
  
  function handleSignOut(){
    Alert.alert('Tem certeza ?', 'Lembre-se, que se você sair, irá precisar de internet para conectar-se novamente.',[
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      }
    ]);
  }

  return (
    <Navigator
      screenOptions={{
        header: (props) => (
          <View
            style={{
              backgroundColor: theme.colors.main,
            }}
          >
            <HeaderTop>
              <Title>Configurações</Title>
              <LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>
          </View>
        ),
      }}
    >
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
