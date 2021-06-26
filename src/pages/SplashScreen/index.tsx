import React, { useEffect } from 'react';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { SplashScreen } from '../../components/SplashScreen';

type SplashScreenPageRouteProp = RouteProp<ParamListBase, 'SplashScreenPage'> & {
  params: {
    goToPage: string;
  };
};

export function SplashScreenPage() {
  const navigation = useNavigation();
  const route = useRoute<SplashScreenPageRouteProp>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({ routes: [{ name: route.params.goToPage }] });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <SplashScreen />;
}
