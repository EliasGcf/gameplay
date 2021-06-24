import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { LinearBackground } from '../../components/LinearBackground';
import { theme } from '../../global/styles/theme';
import { Platform, TextInput, TextInputProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled(LinearBackground)`
  padding: 32px 0 0 24px;
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

export const NumberInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  width: 48px;
  height: 48px;
  background: #1d2766;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #243189;

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
  height: 95px;
  padding: 16px;
  background: #1d2766;
  border-radius: 8px;
  border: 1px solid #243189;
  font-size: 13px;
  line-height: 21px;
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
  background: ${theme.colors.primary};
  margin-bottom: ${Platform.OS === 'ios' ? `${getBottomSpace()}px` : '16px'};
`;

export const SubmitButtonText = styled.Text`
  font-size: 15px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.medium};
`;