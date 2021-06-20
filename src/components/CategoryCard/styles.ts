import styled from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';

type ContentGradientProps = LinearGradientProps & {
  isSelected: boolean;
};

type CheckboxProps = {
  isChecked: boolean;
};

export const LinearBorder = styled(LinearGradient).attrs<any, LinearGradientProps>({
  colors: ['#243189', '#1B2565'],
})`
  width: 104px;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  position: relative;
`;

// prettier-ignore
export const ContentGradient = styled(LinearGradient).attrs<ContentGradientProps,LinearGradientProps>(props => ({
  colors: [props.isSelected ? '#171F52' : '#1D2766', '#1D2766'],
}))<ContentGradientProps>`
  width: 102px;
  height: 118px;
  border-radius: 8px;

  justify-content: center;
`;

export const Checkbox = styled.View<CheckboxProps>`
  height: 8px;
  width: 8px;
  border-width: 1px;
  border-color: ${({ isChecked }) => (isChecked ? theme.colors.primary : '#243189')};
  border-radius: 2px;
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({ isChecked }) => (isChecked ? theme.colors.primary : '#0e1647')};
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
