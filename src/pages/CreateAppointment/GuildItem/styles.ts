import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled(Row)`
  height: 80px;
`;

export const Main = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Content = styled(Row)`
  flex: 1;
  margin-right: 24px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const GuildName = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.rajdhani.bold};
  color: ${theme.colors.heading};
`;

export const GameName = styled.Text`
  font-size: 13px;
  margin-top: 4px;
  line-height: 17px;
  color: ${theme.colors.subheading};
  font-family: ${theme.fonts.inter.regular};
`;

export const Divisor = styled(LinearGradient).attrs({
  colors: ['#171F52', '#1D2766'],
})`
  height: 1px;
`;
