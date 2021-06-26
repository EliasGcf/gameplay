import React, { createContext, ReactNode, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import { discordApi } from '../../services/discordApi';
import { discordAuthConfig } from '../../config/discordAuthConfig';

import {
  User,
  AuthState,
  AuthContextData,
  AuthSessionResponse,
} from './types/AuthContextData';

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AuthState>();
  const [isLoading, setIsLoading] = useState(false);

  async function signIn() {
    try {
      setIsLoading(true);

      const authUrl = discordApi.getUri({
        url: `${discordApi.defaults.baseURL}/oauth2/authorize`,
        params: {
          client_id: discordAuthConfig.clientId,
          redirect_uri: discordAuthConfig.redirectURL,
          response_type: discordAuthConfig.responseType,
          scope: discordAuthConfig.scope,
        },
      });

      const response = (await AuthSession.startAsync({ authUrl })) as AuthSessionResponse;

      if (response.type !== 'success') return;

      const token = response.params.access_token;
      discordApi.defaults.headers.authorization = `Bearer ${token}`;

      const { data: userInfo } = await discordApi.get('/users/@me');

      const [firstName] = userInfo.username.split(' ');

      const user: User = {
        firstName,
        id: userInfo.id,
        email: userInfo.email,
        username: userInfo.username,
        avatarUrl: `${discordAuthConfig.cdnURL}/avatars/${userInfo.id}/${userInfo.avatar}.png`,
      };

      setData({ token, user });
    } catch (error) {
      throw new Error(
        'Não foi possível realizar a autenticação, tente novamente mais tarde.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
