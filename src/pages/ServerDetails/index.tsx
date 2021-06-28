import React from 'react';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { DiscordSvg } from '@components/DiscordSvg';
import { DiscordGuildImage } from '@components/DiscordGuildImage';

import { Appointment } from '../Home';

import { PlayerItem } from './PlayerItem';

import {
  Container,
  Banner,
  Description,
  Title,
  Content,
  ServerDetailsListHeader,
  Footer,
  ImageGradiente,
  PlayersList,
} from './styles';

export type Player = {
  id: string;
  name: string;
  imageUrl: string;
  status: 'on' | 'off';
};

const players: Player[] = [
  {
    id: '1',
    name: 'Elias Gabriel',
    imageUrl: 'https://github.com/EliasGcf.png',
    status: 'on',
  },
  {
    id: '2',
    name: 'Birobirobiro',
    imageUrl: 'https://github.com/birobirobiro.png',
    status: 'off',
  },
  {
    id: '3',
    name: 'Guilherme Capitão',
    imageUrl: 'https://github.com/guilhermecapitao.png',
    status: 'on',
  },
  {
    id: '4',
    name: 'Diego Fernandes',
    imageUrl: 'https://github.com/diego3g.png',
    status: 'on',
  },
  {
    id: '5',
    name: 'Guilherme Rodz',
    imageUrl: 'https://github.com/guilhermerodz.png',
    status: 'on',
  },
];

type ServerDetailsPageRouteProp = RouteProp<ParamListBase, 'ServerDetails'> & {
  params: {
    appointment: Appointment;
  };
};

export function ServerDetails() {
  const route = useRoute<ServerDetailsPageRouteProp>();
  const { appointment } = route.params;

  return (
    <Container>
      <Banner>
        <DiscordGuildImage
          guildId={appointment.guild.id}
          guildIcon={appointment.guild.icon}
          discordSvgProps={{ width: 64, height: 58 }}
          imageStyle={{ height: '100%', width: '100%', borderRadius: 0 }}
          containerStyle={{ flex: 1, width: '100%', borderRadius: 0 }}
        />

        <ImageGradiente>
          <Title>{appointment.guild.name}</Title>

          <Description>{appointment.description}</Description>
        </ImageGradiente>
      </Banner>

      <Content>
        <ServerDetailsListHeader title="Jogadores" description="Total 3" />

        <View style={{ flex: 1 }}>
          <PlayersList
            data={players}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <PlayerItem
                name={item.name}
                imageUrl={item.imageUrl}
                status={item.status}
                showBottomBorder={index + 1 !== players.length}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          />
        </View>
      </Content>

      <Footer>
        <ButtonIcon title="Entrar na partida" Icon={<DiscordSvg />} />
      </Footer>
    </Container>
  );
}
