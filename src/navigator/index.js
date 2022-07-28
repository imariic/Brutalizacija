import React from "react";
import { HomeScreen, SoundsScreen } from "+/screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const navigatorOptions = {
    title: "",
    headerStyle: { backgroundColor: "#145334" },
    headerTintColor: "#ffd700",
  };

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
        options={navigatorOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
