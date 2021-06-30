import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { TouchableContainer } from './styles';

type IconButtonProps = TouchableOpacityProps & {
  Icon: ReactNode;
};

export function IconButton({ Icon, ...rest }: IconButtonProps) {
  return <TouchableContainer {...rest}>{Icon}</TouchableContainer>;
}
