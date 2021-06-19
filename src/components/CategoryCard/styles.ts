import styled from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';

export const LinearBorder = styled(LinearGradient).attrs<any, LinearGradientProps>({
  colors: ['#243189', '#1B2565'],
})`
  width: 104px;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ContentGradient = styled(LinearGradient).attrs<any, LinearGradientProps>({
  colors: ['#171F52', '#1D2766'],
})`
  width: 102px;
  height: 118px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(RectButton)`
  height: 100%;
  width: 100%;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
  margin-top: 16px;
`;
