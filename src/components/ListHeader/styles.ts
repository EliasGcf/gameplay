import { View } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Description = styled.Text`
  color: #abb1cc;
  font-size: 13px;
  font-family: ${theme.fonts.inter.regular};
`;
