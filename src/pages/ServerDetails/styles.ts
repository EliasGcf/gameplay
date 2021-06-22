import styled from 'styled-components/native';

import { LinearBackground } from '../../components/LinearBackground';
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearBackground)`
  flex: 1;
`;

export const Banner = styled.View`
  height: 234px;
`;

export const Image = styled.Image`
  flex: 1;
  padding-left: 24px;
  padding-right: 40px;
  padding-bottom: 24px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Description = styled.Text`
  font-size: 13px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.regular};
`;

