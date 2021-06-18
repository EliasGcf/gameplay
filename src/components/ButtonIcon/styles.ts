import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TouchableContainerProps = {
  hasTitle: boolean;
};

export const TouchableContainer = styled(TouchableOpacity).attrs(props => ({
  activeOpacity: props.activeOpacity ?? Number(0.7),
}))<TouchableContainerProps>`
  height: 56px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.primary};
  justify-content: ${({ hasTitle }) => (hasTitle ? 'flex-start' : 'center')};
  width: ${({ hasTitle }) => (hasTitle ? '100%' : '56px')};
`;

export const WrapperIcon = styled.View`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  border-right-width: 1px;
  border-right-color: #991f36;
`;

export const Title = styled.Text`
  padding: 0 40px 0 40px;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter.medium};
`;
