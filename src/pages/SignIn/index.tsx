import React from 'react';
import { MotiView } from 'moti';
import { StatusBar } from 'expo-status-bar';

import IllustrationImg from '../../assets/illustration/image.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
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

          <MotiView from={{ translateX: -100 }} animate={{ translateX: 0 }}>
            <ButtonIcon title="Entrar com Discord" Icon={<DiscordSvg />} />
          </MotiView>
        </Content>
      </Container>
    </>
  );
}
