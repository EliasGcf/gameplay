import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { DiscordGuildImage } from '@components/DiscordGuildImage';
import {
  Row,
  Block,
  BoxBorder,
  ServerSelect,
  ServerSelectText,
  ServerSelectDescription,
} from './styles';

import { theme } from '../../../global/styles/theme';

type ServerButtonProps = RectButtonProps & {
  guildName?: string;
  guildId?: string;
  guildIcon?: string | null;
  game?: string;
};

export function ServerButton({
  guildName,
  game,
  guildId,
  guildIcon,
  ...rest
}: ServerButtonProps) {
  return (
    <RectButton {...rest}>
      <ServerSelect>
        {guildId ? (
          <DiscordGuildImage guildId={guildId} guildIcon={guildIcon} />
        ) : (
          <BoxBorder>
            <Block />
          </BoxBorder>
        )}

        <Row
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: guildId ? 'space-between' : 'center',
          }}
        >
          {guildId ? (
            <View style={{ marginLeft: 20 }}>
              <ServerSelectText>{guildName}</ServerSelectText>
              <ServerSelectDescription>{game}</ServerSelectDescription>
            </View>
          ) : (
            <ServerSelectText>Selecione um servidor</ServerSelectText>
          )}
          <FontAwesome name="chevron-right" size={8} color={theme.colors.texts.heading} />
        </Row>
      </ServerSelect>
    </RectButton>
  );
}
