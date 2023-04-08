import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomerScreen from "../screens/CustomerScreen";
import screenListConstants from "../constants/screenListConstants";
import AdminScreen from "../screens/AdminScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={screenListConstants.HOME_SCREEN.NAME}
          options={{
            title: screenListConstants.HOME_SCREEN.TITLE,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name={screenListConstants.CUSTOMER_SCREEN.NAME}
          options={{
            title: screenListConstants.CUSTOMER_SCREEN.TITLE,
          }}
          component={CustomerScreen}
        />
        <Stack.Screen
          name={screenListConstants.ADMIN_SCREEN.NAME}
          options={{
            title: screenListConstants.ADMIN_SCREEN.TITLE,
          }}
          component={AdminScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
