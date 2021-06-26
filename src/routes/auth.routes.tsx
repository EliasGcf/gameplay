import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';
import { SplashScreenPage } from '../pages/SplashScreen';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false,
      }}
    >
      <Screen
        name="SplashScreen"
        initialParams={{ goToPage: 'SignIn' }}
        component={SplashScreenPage}
      />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
