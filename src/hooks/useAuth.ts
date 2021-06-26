import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';

import { AuthContext } from '../contexts/auth/auth.context';
import { AuthContextData, User } from '../contexts/auth/types/AuthContextData';

export function useAuth(type: 'isAuthenticated'): AuthContextData & { user: User };
export function useAuth(type?: 'isNotAuthenticated'): AuthContextData;
export function useAuth(
  type: 'isNotAuthenticated' | 'isAuthenticated' = 'isNotAuthenticated',
) {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  if (type === 'isAuthenticated' && !authContext.user) {
    throw new Error('User is not authenticated in this page.');
  }

  return authContext;
}
