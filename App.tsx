import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';

import { SignIn } from './src/pages/SignIn';

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsIsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <SignIn />
    </>
  );
}
