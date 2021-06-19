import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  ButtonContainer,
  Checkbox,
  ContentGradient,
  LinearBorder,
  Title,
} from './styles';
import { View } from 'react-native';

type CategoryCardProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  isSelected?: boolean;
  showCheckbox?: boolean;
};

export function CategoryCard({
  title,
  icon: Icon,
  isSelected = false,
  showCheckbox = false,
  ...rest
}: CategoryCardProps) {
  return (
    <LinearBorder>
      <ContentGradient isSelected={isSelected}>
        {showCheckbox && <Checkbox isChecked={isSelected} />}
        <ButtonContainer {...rest}>
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </ButtonContainer>
      </ContentGradient>
    </LinearBorder>
  );
}
