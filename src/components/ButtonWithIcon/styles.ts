import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const TouchableContainer = styled(TouchableOpacity).attrs(props => {
  return {
    activeOpacity: props.activeOpacity ?? Number(0.7),
  };
})`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background: ${theme.colors.brand.primary};
`;

export const WrapperIcon = styled.View`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  border-right-width: 1px;
  border-right-color: #991f36;
`;

export const WrapperTitle = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.inter.medium};
`;
