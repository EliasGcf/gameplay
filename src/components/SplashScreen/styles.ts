import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#0E1647', '#0A1033'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Row = styled.View`
  flex-direction: row;
  position: absolute;
`;