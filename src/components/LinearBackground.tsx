import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../global/styles/theme';

type LinearBackgroundProps = {
  children: ReactNode;
};

export function LinearBackground({ children }: LinearBackgroundProps) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.backgroundGradient.from, theme.backgroundGradient.to]}
    >
      {children}
    </LinearGradient>
  );
}
