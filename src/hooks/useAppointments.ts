import { useCallback, useMemo } from 'react';
import { asyncStorageKeys } from '@config/asyncStorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Category } from '../utils/categories';

const APPOINTMENTS_ASYNC_STORAGE_KEY = `${asyncStorageKeys.base}:appointments`;

export type Guild = {
  id: string;
  name: string;
  gameName: string;
  owner: boolean;
  icon: string | null;
};

export type Appointment = {
  id: string;
  date: string;
  category: Category;
  description: string;
  guild: Guild;
};

export function useAppointments() {
  const get = useCallback(async (): Promise<Appointment[]> => {
    const response = await AsyncStorage.getItem(APPOINTMENTS_ASYNC_STORAGE_KEY);

    if (!response) return [];

    return JSON.parse(response);
  }, []);

  const add = useCallback(
    async (appointment: Appointment) => {
      const oldAppointments = await get();

      const newAppointments = [...oldAppointments, appointment];
      const parsedValue = JSON.stringify(newAppointments);

      await AsyncStorage.setItem(APPOINTMENTS_ASYNC_STORAGE_KEY, parsedValue);
    },
    [get],
  );

  const response = useMemo(() => {
    return {
      get,
      add,
    };
  }, [get, add]);

  return response;
}
