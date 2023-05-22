// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home'
// import Cources from '../screens/Cources'
// import Xd from '../screens/Xd'
// import FrstJSBasics from '../screens/FrstJSBasics'

export default function Navigation() {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Cources" component={Cources} options={{ headerShown: false }} />
        <Stack.Screen name="Xd" component={Xd} options={{ headerShown: false }} />
        <Stack.Screen name="FrstJSBasics" component={FrstJSBasics} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    );
  };
