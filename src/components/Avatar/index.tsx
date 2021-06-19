import React from 'react';

import { ContainerGradient, Image } from './styles';

type AvatarProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <ContainerGradient colors={['#243189', '#1B2565']}>
      <Image source={{ uri: urlImage }} />
    </ContainerGradient>
  );
}
