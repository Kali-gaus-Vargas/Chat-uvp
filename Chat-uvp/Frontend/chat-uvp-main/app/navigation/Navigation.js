import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account/AccountScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();
const navigation = useNavigation;

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mi UVP"
          navigation={navigation}
          component={AccountScreen}
        />
        <Stack.Screen
          name="registro"
          navigation={navigation}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Chat"
          navigation={navigation}
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
