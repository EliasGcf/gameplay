import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const TouchableContainer = styled(TouchableOpacity).attrs(props => {
  return {
    activeOpacity: props.activeOpacity ?? Number(0.7),
  };
})`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.brand.primary};
`;
