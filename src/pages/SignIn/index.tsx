import React, { useCallback } from 'react';
import { MotiView, useAnimationState } from 'moti';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration/image.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  const animationState = useAnimationState({
    from: { translateX: -100, scale: 1 },
    to: { translateX: 0, scale: 1 },
    pressed: { scale: 1.05 },
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

  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <Container>
      <BackgroundImage source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1500 }}
        >
          <Title>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Title>

          <Description>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Description>
        </MotiView>

        <MotiView state={animationState}>
          <ButtonIcon
            Icon={<DiscordSvg />}
            title="Entrar com Discord"
            onPress={handleNavigateToSignIn}
            onPressIn={SignInButtonPressedIn}
            onPressOut={SignInButtonPressedOut}
          />
        </MotiView>
      </Content>
    </Container>
  );
}
