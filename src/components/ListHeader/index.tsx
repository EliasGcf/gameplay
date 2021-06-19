import React from 'react';
import { ViewProps } from 'react-native';

import { Container, Title, Description } from './styles';

type ListHeaderProps = ViewProps & {
  title: string;
  description?: string;
};

export function ListHeader({ title, description, ...rest }: ListHeaderProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
