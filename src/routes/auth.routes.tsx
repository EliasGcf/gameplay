import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SplashScreenPage } from '../pages/SplashScreen';
import { ServerDetails } from '../pages/ServerDetails';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false,
      }}
    >
      <Screen name="SplashScreen" component={SplashScreenPage} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen
        name="ServerDetails"
        component={ServerDetails}
        options={{
          headerShown: true,
          headerTitle: 'Detalhes',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.heading,
          headerRightContainerStyle: { marginRight: 20 },
          headerTitleStyle: { fontSize: 20, fontFamily: theme.fonts.rajdhani.bold },
          headerBackground: () => (
            <LinearGradient style={{ flex: 1 }} colors={['#1D2766', '#171F52']} />
          ),
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7}>
              <FontAwesome5 name="share-alt" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}
