import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SplashScreenPage } from '../pages/SplashScreen';
import { ServerDetails } from '../pages/ServerDetails';
import { CreateAppointment } from '../pages/CreateAppointment';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
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
          headerTintColor: theme.colors.texts.heading,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 16 },
          headerBackImage: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={theme.colors.texts.heading}
            />
          ),
          headerRightContainerStyle: { marginRight: 20 },
          headerTitleStyle: { fontSize: 20, fontFamily: theme.fonts.rajdhani.bold },
          headerBackground: () => (
            <LinearGradient style={{ flex: 1 }} colors={theme.colors.shapes.boxLinear} />
          ),
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7}>
              <FontAwesome5
                name="share-alt"
                size={24}
                color={theme.colors.brand.primary}
              />
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
          headerTintColor: theme.colors.texts.heading,
          headerLeftContainerStyle: { marginLeft: 16 },
          headerTitleStyle: { fontSize: 20, fontFamily: theme.fonts.rajdhani.bold },
          headerBackImage: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={theme.colors.texts.heading}
            />
          ),
          headerBackground: () => (
            <LinearGradient style={{ flex: 1 }} colors={theme.colors.shapes.boxLinear} />
          ),
        }}
      />
    </Navigator>
  );
}
