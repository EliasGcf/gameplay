import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Title, TouchableContainer, WrapperIcon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  title?: string;
  Icon: React.ReactNode;
};

export function ButtonIcon({ title, Icon, ...rest }: ButtonIconProps) {
  if (!title) {
    return (
      <TouchableContainer hasTitle={false} {...rest}>
        {Icon}
      </TouchableContainer>
    );
  }

  return (
    <TouchableContainer hasTitle {...rest}>
      <WrapperIcon>{Icon}</WrapperIcon>

      <Title>{title}</Title>
    </TouchableContainer>
  );
}
