import { View, Image as RNImage } from 'react-native';
import styled from 'styled-components/native';

type ContainerProps = {
  hasIcon: boolean;
};

export const Container = styled(View)<ContainerProps>`
  width: 64px;
  height: 68px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: ${({ hasIcon }) => (hasIcon ? 'transparent' : '#7289da')};
`;

export const Image = styled(RNImage)`
  width: 64px;
  height: 68px;
  border-radius: 8px;
`;
