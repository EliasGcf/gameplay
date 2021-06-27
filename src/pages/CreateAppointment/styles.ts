import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  padding: 32px 0 0 24px;
  background: #0a1033;
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: 32px;
  padding-right: 24px;
`;

export const DateSection = styled(Row)`
  margin: 28px 0;
  justify-content: space-between;
`;

export const InputBorder = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
})`
  width: 64px;
  height: 48px;
  padding: 1px;
  border-radius: 8px;
`;

export const InputBox = styled(LinearGradient).attrs({
  colors: ['#171F52', '#1D2766'],
})`
  flex: 1;
  border-radius: 8px;
`;

export const NumberInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  flex: 1;
  text-align: center;
  border-radius: 8px;

  font-size: 13px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.regular};
`;

export const InputSeparator = styled.Text`
  margin: 0 4px;
  font-size: 15px;
  line-height: 20px;
  color: ${theme.colors.subheading};
  font-family: ${theme.fonts.inter.medium};
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  maxLength: 300,
  numberOfLines: 5,
})`
  flex: 1;
  padding: 16px;
  font-size: 13px;
  line-height: 21px;
  border-radius: 8px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.regular};
`;

export const SubmitButton = styled(RectButton)`
  height: 56px;
  margin-top: 24px;
  border-radius: 8px;
  margin-right: 24px;
  align-items: center;
  justify-content: center;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
  background: ${theme.colors.primary};
  margin-bottom: ${Platform.OS === 'ios' ? `${getBottomSpace()}px` : '16px'};
`;

export const SubmitButtonText = styled.Text`
  font-size: 15px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.medium};
`;
