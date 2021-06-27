import React from 'react';

import { DiscordSvg } from '@components/DiscordSvg';
import { discordAuthConfig } from '@config/discordAuthConfig';

import { Container, Image } from './styles';

type DiscordGuildImageProps = {
  guildId: string;
  guildIcon?: string | null;
};

export function DiscordGuildImage({ guildId, guildIcon }: DiscordGuildImageProps) {
  if (!guildIcon) {
    return (
      <Container>
        <DiscordSvg width={34} height={28} />
      </Container>
    );
  }

  return (
    <Image
      source={{ uri: `${discordAuthConfig.cdnURL}/icons/${guildId}/${guildIcon}.png` }}
    />
  );
}
