import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

export const Greeting = styled.Text`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.medium};
`;

export const Username = styled.Text`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Message = styled.Text`
  font-size: 13px;
  color: ${theme.colors.subheading};
  font-family: ${theme.fonts.inter.regular};
`;