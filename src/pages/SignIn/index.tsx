import React, { useCallback } from 'react';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration/image.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('Home');
  }, []);

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
          <ButtonIcon
            Icon={<DiscordSvg />}
            title="Entrar com Discord"
            onPress={handleNavigateToSignIn}
          />
        </MotiView>
      </Content>
    </Container>
  );
}
