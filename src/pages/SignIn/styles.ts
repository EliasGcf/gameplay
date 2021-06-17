import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`;

export const BackgroundImage = styled.Image`
  width: 100%;
`;

export const Content = styled.View`
  margin-top: -60px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`;
