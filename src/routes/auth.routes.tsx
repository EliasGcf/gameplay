import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SplashScreenPage } from '../pages/SplashScreen';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}
    >
      <Screen name="SplashScreen" component={SplashScreenPage} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
