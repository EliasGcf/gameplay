import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { DiscordGuildImage } from '@components/DiscordGuildImage';

import { Container, GuildName, GameName, Content, Divisor, Main } from './styles';

import { theme } from '../../../global/styles/theme';

type GuildItemProps = {
  name: string;
  game: string;
  guildId: string;
  guildIcon?: string | null;
  showBottomBorder?: boolean;
};

export function GuildItem({
  name,
  game,
  guildId,
  guildIcon,
  showBottomBorder = true,
}: GuildItemProps) {
  return (
    <Container>
      <DiscordGuildImage guildId={guildId} guildIcon={guildIcon} />

      <Main>
        <Content>
          <View>
            <GuildName>{name}</GuildName>
            <GameName>{game}</GameName>
          </View>

          <FontAwesome
            name="chevron-right"
            size={10}
            color={theme.colors.texts.heading}
          />
        </Content>

        {showBottomBorder && <Divisor />}
      </Main>
    </Container>
  );
}
