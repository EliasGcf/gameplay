import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SplashScreen } from '../../components/SplashScreen';

export function SplashScreenPage() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({ routes: [{ name: 'Home' }] });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <SplashScreen />;
}
