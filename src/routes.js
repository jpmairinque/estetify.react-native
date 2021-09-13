import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "./styles/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

import Pacientes from "./screens/Pacientes/Pacientes";
import Atendimentos from "./screens/Atendimentos/Atendimentos";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import Profile from "./screens/Profile/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   keyboardHidesTabBar: true,
      //   activeTintColor: colors.lime,
      //   inactiveTintColor: colors.gray,
      //   showLabel: false,
      // }}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#33CC95",
        tabBarInactiveTintColor: "#E5E5E5",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ color }) => {
          let iconName;
          let size;

          switch (route.name) {
            case "Pacientes":
              iconName = "people";
              size = 40;
              break;
            case "Atendimentos":
              iconName = "clipboard";
              size = 36;
              break;
            case "Profile":
              iconName = "person-circle";
              size = 36;
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={"Pacientes"}
        options={{ headerShown: false }}
        component={Pacientes}
      />
      <Tab.Screen
        name={"Atendimentos"}
        options={{ headerShown: false }}
        component={Atendimentos}
      />
      <Tab.Screen
        name={"Profile"}
        options={{ headerShown: false }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Tabs}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const { userName, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <NavigationContainer>
      {userName ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
