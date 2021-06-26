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
} from './styles';

import { theme } from '../../../global/styles/theme';

type ServerButtonProps = RectButtonProps & {};

export function ServerButton({ ...rest }: ServerButtonProps) {
  const serverSelected = false;

  return (
    <RectButton {...rest}>
      <ServerSelect>
        {serverSelected ? (
          <ServerImage
            source={{
              uri: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
            }}
          />
        ) : (
          <Block />
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
              <ServerSelectText>Valorosos</ServerSelectText>
              <ServerSelectDescription>Valorant</ServerSelectDescription>
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
