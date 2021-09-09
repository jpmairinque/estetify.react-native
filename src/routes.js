import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "./styles/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Pacientes from "./screens/Pacientes/Pacientes";
import Atendimentos from "./screens/Atendimentos/Atendimentos";
import Login from "./screens/Login/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.lime,
        inactiveTintColor: colors.gray,
        showLabel: false,
       
      }}
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ color }) => {
          let iconName;
          let size 

          switch (route.name) {
            case "Pacientes":
              iconName = "people";
              size=40;
              break;
            case "Atendimentos":
              iconName = "clipboard";
              size = 36
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
      
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Tabs}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
