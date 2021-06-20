import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
