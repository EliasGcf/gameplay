import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SplashScreenPage } from '../pages/SplashScreen';
import { ServerDetails } from '../pages/ServerDetails';
import { CreateAppointment } from '../pages/CreateAppointment';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthenticatedRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false,
      }}
    >
      <Screen
        name="SplashScreen"
        component={SplashScreenPage}
        initialParams={{ goToPage: 'Home' }}
      />
      <Screen name="Home" component={Home} />
      <Screen
        name="ServerDetails"
        component={ServerDetails}
        options={{
          headerShown: true,
          headerTitle: 'Detalhes',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.heading,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 16 },
          headerBackImage: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={theme.colors.heading}
            />
          ),
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
      <Screen
        name="CreateAppointment"
        component={CreateAppointment}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitle: 'Agendar partida',
          headerTintColor: theme.colors.heading,
          headerLeftContainerStyle: { marginLeft: 16 },
          headerTitleStyle: { fontSize: 20, fontFamily: theme.fonts.rajdhani.bold },
          headerBackImage: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={theme.colors.heading}
            />
          ),
          headerBackground: () => (
            <LinearGradient style={{ flex: 1 }} colors={['#1D2766', '#171F52']} />
          ),
        }}
      />
    </Navigator>
  );
}
