import React from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DiscordImg from '../../assets/discord.png';
import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

import { Container, BackgroundImage, Content, Title, Description } from './styles';

export function SignIn() {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <BackgroundImage source={IllustrationImg} resizeMode="stretch" />

        <Content>
          <Title>
            Organize{'\n'}suas jogatinas{'\n'}facilmente
          </Title>

          <Description>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Description>

          <ButtonIcon title="Entrar com Discord" Icon={<Image source={DiscordImg} />} />
        </Content>
      </Container>
    </>
  );
}
