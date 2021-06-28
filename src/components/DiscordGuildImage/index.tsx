import React from 'react';

import { DiscordSvg, DiscordSvgProps } from '@components/DiscordSvg';
import { discordAuthConfig } from '@config/discordAuthConfig';

import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { Container, Image } from './styles';

type DiscordGuildImageProps = {
  guildId: string;
  guildIcon?: string | null;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  discordSvgProps?: DiscordSvgProps;
};

export function DiscordGuildImage({
  guildId,
  guildIcon,
  imageStyle,
  containerStyle,
  discordSvgProps,
}: DiscordGuildImageProps) {
  return (
    <Container style={containerStyle}>
      {guildIcon ? (
        <Image
          style={imageStyle}
          source={{
            uri: `${discordAuthConfig.cdnURL}/icons/${guildId}/${guildIcon}.png`,
          }}
        />
      ) : (
        <DiscordSvg width={34} height={28} {...discordSvgProps} />
      )}
    </Container>
  );
}
