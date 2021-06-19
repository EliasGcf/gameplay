import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../global/styles/theme';
import { StyleProp, ViewStyle } from 'react-native';

type LinearBackgroundProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function LinearBackground({ children, style }: LinearBackgroundProps) {
  return (
    <LinearGradient
      style={[{ flex: 1 }, style]}
      colors={[theme.backgroundGradient.from, theme.backgroundGradient.to]}
    >
      {children}
    </LinearGradient>
  );
}
