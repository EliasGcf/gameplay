import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../../global/styles/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const ServerSelect = styled(Row)`
  height: 68px;
  border-radius: 8px;
  padding-right: 24px;
  align-items: center;
  border: 1px solid #243189;
`;

export const BoxBorder = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
})`
  width: 64px;
  height: 67px;
  padding: 1px;
  border-radius: 8px;
  margin-bottom: 1px;
`;

export const Block = styled(LinearGradient).attrs({
  colors: ['#171F52', '#1D2766'],
})`
  flex: 1;
  margin-left: -1px;
  border-radius: 8px;
`;

export const ServerSelectText = styled.Text`
  font-size: 18px;
  margin-right: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const ServerSelectDescription = styled.Text`
  color: ${theme.colors.subheading};
  font-size: 13px;
  font-family: ${theme.fonts.inter.regular};
  line-height: 17px;
  margin-top: 4px;
`;
