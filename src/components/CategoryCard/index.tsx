import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ContentGradient, LinearBorder, Title } from './styles';

type CategoryCardProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function CategoryCard({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryCardProps) {
  return (
    <LinearBorder>
      <ContentGradient>
        <ButtonContainer>
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </ButtonContainer>
      </ContentGradient>
    </LinearBorder>
  );
}
