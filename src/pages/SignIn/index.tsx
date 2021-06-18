import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MotiView, useAnimationState } from 'moti';

import IllustrationImg from '../../assets/illustration/image.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
  const animationState = useAnimationState({
    from: { translateX: -100, scale: 1 },
    to: { translateX: 0, scale: 1 },
    pressed: { scale: 1.2 },
  });

  const SignInButtonPressedIn = useCallback(() => {
    if (animationState.current === 'to') {
      animationState.transitionTo('pressed');
    }
  }, []);

  const SignInButtonPressedOut = useCallback(() => {
    if (animationState.current === 'pressed') {
      animationState.transitionTo('to');
    }
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <BackgroundImage source={IllustrationImg} resizeMode="stretch" />

        <Content>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 1500 }}
          >
            <Title>
              Organize{'\n'}suas jogatinas{'\n'}facilmente
            </Title>

            <Description>
              Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
            </Description>
          </MotiView>

          <MotiView state={animationState}>
            <ButtonIcon
              Icon={<DiscordSvg />}
              title="Entrar com Discord"
              onPressIn={SignInButtonPressedIn}
              onPressOut={SignInButtonPressedOut}
            />
          </MotiView>
        </Content>
      </Container>
    </>
  );
}
