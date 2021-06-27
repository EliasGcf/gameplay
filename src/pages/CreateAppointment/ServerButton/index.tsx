import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  Row,
  Block,
  ServerImage,
  ServerSelect,
  ServerSelectText,
  ServerSelectDescription,
  BoxBorder,
} from './styles';

import { theme } from '../../../global/styles/theme';

type ServerButtonProps = RectButtonProps & {
  guildName?: string;
  imageUrl?: string;
  game?: string;
};

export function ServerButton({ guildName, game, imageUrl, ...rest }: ServerButtonProps) {
  const serverSelected = !!guildName && !!guildName;

  return (
    <RectButton {...rest}>
      <ServerSelect>
        {serverSelected ? (
          <ServerImage source={{ uri: imageUrl }} />
        ) : (
          <BoxBorder>
            <Block />
          </BoxBorder>
        )}

        <Row
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: serverSelected ? 'space-between' : 'center',
          }}
        >
          {serverSelected ? (
            <View style={{ marginLeft: 20 }}>
              <ServerSelectText>{guildName}</ServerSelectText>
              <ServerSelectDescription>{game}</ServerSelectDescription>
            </View>
          ) : (
            <ServerSelectText>Selecione um servidor</ServerSelectText>
          )}
          <FontAwesome name="chevron-right" size={8} color={theme.colors.heading} />
        </Row>
      </ServerSelect>
    </RectButton>
  );
}
