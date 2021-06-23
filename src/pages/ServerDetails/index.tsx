import React from 'react';

import { View } from 'react-native';
import { FlatList } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { DiscordSvg } from '../../components/DiscordSvg';

import { PlayerItem } from './PlayerItem';

export type Player = {
  id: string;
  name: string;
  imageUrl: string;
  status: 'on' | 'off';
};

import {
  Container,
  Banner,
  Description,
  Image,
  Title,
  Content,
  ServerDetailsListHeader,
  Footer,
  ImageGradiente,
  PlayersList,
} from './styles';

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

export function ServerDetails() {
  return (
    <Container>
      <Banner>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
          }}
        />

        <ImageGradiente>
          <Title>Lendários</Title>

          <Description>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Description>
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
