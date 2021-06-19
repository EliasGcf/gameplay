import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';

import { LinearBackground } from './src/components/LinearBackground';

import { Routes } from './src/routes/index.routes';

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
    <LinearBackground>
      <StatusBar style="light" />
      <Routes />
    </LinearBackground>
  );
}
