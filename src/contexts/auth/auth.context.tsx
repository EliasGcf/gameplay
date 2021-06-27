import React, { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';

import { discordApi } from '../../services/discordApi';

import { discordAuthConfig } from '../../config/discordAuthConfig';
import { asyncStorageKeys } from '../../config/asyncStorageKeys';

import {
  User,
  AuthState,
  AuthContextData,
  AuthSessionResponse,
} from './types/AuthContextData';

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

const ASYNC_STORAGE_TOKEN_KEY = `${asyncStorageKeys.base}:token` as const;
const ASYNC_STORAGE_USER_KEY = `${asyncStorageKeys.base}:user` as const;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AuthState>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const [tokenKeyAndValue, userKeyAndValue] = await AsyncStorage.multiGet([
        ASYNC_STORAGE_TOKEN_KEY,
        ASYNC_STORAGE_USER_KEY,
      ]);

      const [, token] = tokenKeyAndValue;
      const [, user] = userKeyAndValue;

      if (token && user) {
        discordApi.defaults.headers.authorization = `Bearer ${token}`;

        setData({
          token,
          user: JSON.parse(user),
        });
      }
    }

    loadStorageData();
  }, []);

  async function signIn() {
    try {
      setIsLoading(true);

      const authUrl = discordApi.getUri({
        url: `${discordApi.defaults.baseURL}/oauth2/authorize`,
        params: {
          scope: discordAuthConfig.scope,
          client_id: discordAuthConfig.clientId,
          redirect_uri: discordAuthConfig.redirectURL,
          response_type: discordAuthConfig.responseType,
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

      await AsyncStorage.multiSet([
        [ASYNC_STORAGE_TOKEN_KEY, token],
        [ASYNC_STORAGE_USER_KEY, JSON.stringify(user)],
      ]);
    } catch (error) {
      throw new Error(
        'Não foi possível realizar a autenticação, tente novamente mais tarde.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove([ASYNC_STORAGE_TOKEN_KEY, ASYNC_STORAGE_USER_KEY]);
    setData(undefined);
  }

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
