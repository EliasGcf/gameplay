import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { ButtonIcon } from '../ButtonIcon';

import { Container, Row, Content, Message, Username, Greeting } from './styles';
import { theme } from '../../global/styles/theme';

export function Header() {
  return (
    <Container style={{ alignItems: 'center' }}>
      <Avatar urlImage="https://github.com/EliasGcf.png" />

      <Content>
        <View>
          <Row>
            <Greeting>Olá, </Greeting>
            <Username>Elias</Username>
          </Row>
          <Message>Hoje é dia de vitória</Message>
        </View>

        <ButtonIcon
          Icon={<MaterialIcons name="add" size={24} color={theme.colors.heading} />}
        />
      </Content>
    </Container>
  );
}
