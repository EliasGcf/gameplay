import React, { useCallback } from 'react';
import { MotiView } from 'moti';
import { ActivityIndicator, Alert } from 'react-native';

import IllustrationImg from '../../assets/illustration/image.png';

import { useAuth } from '../../hooks/useAuth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { theme } from '../../global/styles/theme';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
  const { signIn, isLoading } = useAuth();

  const handleNavigateToSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Eita!', error.message);
    }
  }, [signIn]);

  return (
    <Container>
      <BackgroundImage source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <MotiView from={{ translateY: 100 }} animate={{ translateY: 0 }}>
          <Title>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Title>

          <Description>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Description>
        </MotiView>

        <MotiView
          from={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          delay={400}
        >
          {isLoading ? (
            <ActivityIndicator
              style={{ height: 56 }}
              size={24}
              color={theme.colors.primary}
            />
          ) : (
            <ButtonIcon
              Icon={<DiscordSvg />}
              style={{ width: 274 }}
              title="Entrar com Discord"
              onPress={handleNavigateToSignIn}
            />
          )}
        </MotiView>
      </Content>
    </Container>
  );
}
