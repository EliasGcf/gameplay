import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Title, TouchableContainer, WrapperIcon, WrapperTitle } from './styles';

type ButtonWithIconProps = TouchableOpacityProps & {
  title: string;
  Icon: ReactNode;
};

export function ButtonWithIcon({ title, Icon, ...rest }: ButtonWithIconProps) {
  return (
    <TouchableContainer {...rest}>
      <WrapperIcon>{Icon}</WrapperIcon>

      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
    </TouchableContainer>
  );
}
