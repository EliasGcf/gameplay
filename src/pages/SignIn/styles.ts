import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

import { LinearBackground } from '../../components/LinearBackground';

export const Container = styled(LinearBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  max-width: 375px;
`;

export const Content = styled.View`
  margin-top: -32px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 16px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Description = styled.Text`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 64px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.inter.regular};
`;
