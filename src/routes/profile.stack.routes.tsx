import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "../screens/Profile";
import { Header, Title, LogoutButton } from "../screens/Profile/styles";
import { StatusBar, View } from "react-native";
import { HeaderTop } from "../screens/Profile/styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createStackNavigator();

export function ProfileRoutes() {
  const theme = useTheme();

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
              <LogoutButton onPress={() => {}}>
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
