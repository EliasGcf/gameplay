import React from 'react';

import { theme } from '../../global/styles/theme';

import { ContainerGradient, Image } from './styles';

type AvatarProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <ContainerGradient colors={theme.colors.shapes.strokeLinear}>
      <Image source={{ uri: urlImage }} />
    </ContainerGradient>
  );
}
