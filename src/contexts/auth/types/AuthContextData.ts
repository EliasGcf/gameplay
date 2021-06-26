import { AuthSessionResult } from 'expo-auth-session';

export type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  avatarUrl: string;
};

export type AuthState = { user: User; token: string };

export type AuthContextData = {
  user?: User;
  isLoading: boolean;
  signIn: () => Promise<void>;
};

export type AuthSessionResponse = AuthSessionResult & {
  params: {
    access_token: string;
  };
};
