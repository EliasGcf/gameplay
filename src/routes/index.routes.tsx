import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import { AuthenticatedRoutes } from './authenticated.routes';
import { SignInRoutes } from './signIn.routes';

export function Routes() {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <SignInRoutes />;
}
