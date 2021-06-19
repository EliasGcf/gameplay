import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { ButtonIcon } from '../ButtonIcon';

import { Container, Content, Message, Username, Greeting } from './styles';
import { theme } from '../../global/styles/theme';

export function Header() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/EliasGcf.png" />

      <Content>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Greeting>Olá, </Greeting>
            <Username>Elias</Username>
          </View>
          <Message>Hoje é dia de vitória</Message>
        </View>

        <ButtonIcon
          Icon={<MaterialIcons name="add" size={24} color={theme.colors.heading} />}
        />
      </Content>
    </Container>
  );
}
