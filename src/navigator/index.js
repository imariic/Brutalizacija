import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import SoundsScreen from "../screens/SoundsScreen/SoundsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Sounds"
        component={SoundsScreen}
        options={{
          title: "",
          headerStyle: { backgroundColor: "#145334" },
          headerTintColor: "#ffd700",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
