import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";

import { NativeBaseProvider, extendTheme } from 'native-base';

const newColorTheme = {
  brand: {
    900: '#58f00c',
    800: '#ffffff',
    700: '#cccccc',
  },
};

const theme = extendTheme({
colors: newColorTheme,
})

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
