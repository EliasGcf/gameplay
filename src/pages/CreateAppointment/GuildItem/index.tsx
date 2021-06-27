import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
  GuildImage,
  Container,
  GuildName,
  GameName,
  Content,
  Divisor,
  Main,
} from './styles';

import { theme } from '../../../global/styles/theme';

type GuildItemProps = {
  name: string;
  game: string;
  imageUrl: string;
  showBottomBorder?: boolean;
};

export function GuildItem({
  name,
  game,
  imageUrl,
  showBottomBorder = true,
}: GuildItemProps) {
  return (
    <Container>
      <GuildImage source={{ uri: imageUrl }} />

      <Main>
        <Content>
          <View>
            <GuildName>{name}</GuildName>
            <GameName>{game}</GameName>
          </View>

          <FontAwesome name="chevron-right" size={10} color={theme.colors.heading} />
        </Content>

        {showBottomBorder && <Divisor />}
      </Main>
    </Container>
  );
}
