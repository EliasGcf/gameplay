import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { MotiView, useAnimationState } from 'moti';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  ButtonContainer,
  Checkbox,
  ContentGradient,
  LinearBorder,
  Title,
} from './styles';

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
  const animationState = useAnimationState({
    from: { translateY: 0 },
    to: { translateY: 0 },
    pressed: { translateY: -10 },
  });

  const checkboxAnimationState = showCheckbox
    ? useAnimationState({
        from: { opacity: 0 },
        to: { opacity: 1 },
      })
    : undefined;

  const onCardPressIn = useCallback(() => {
    animationState.transitionTo('pressed');
    checkboxAnimationState?.transitionTo('from');
  }, []);

  const onCardPressOut = useCallback(() => {
    animationState.transitionTo('to');
    checkboxAnimationState?.transitionTo('to');
  }, []);

  return (
    <LinearBorder>
      <ContentGradient>
        {showCheckbox && (
          <MotiView state={checkboxAnimationState}>
            <Checkbox isChecked={isSelected} />
          </MotiView>
        )}

        <Pressable onPressIn={onCardPressIn} onPressOut={onCardPressOut}>
          <ButtonContainer {...rest}>
            <MotiView state={animationState} style={{ alignItems: 'center' }}>
              <Icon width={48} height={48} />
              <Title>{title}</Title>
            </MotiView>
          </ButtonContainer>
        </Pressable>
      </ContentGradient>
    </LinearBorder>
  );
}
