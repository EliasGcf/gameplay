import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { ButtonIcon } from '../ButtonIcon';

import { Container, Row, Content, Message, Username, Greeting } from './styles';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/useAuth';

export type HeaderProps = {
  name: string;
  imageUrl: string;
  onButtonIconPress: () => void;
};

export function Header({ name, imageUrl, onButtonIconPress }: HeaderProps) {
  const { signOut } = useAuth();

  return (
    <Container style={{ alignItems: 'center' }}>
      <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
        <Avatar urlImage={imageUrl} />
      </TouchableOpacity>

      <Content>
        <View>
          <Row>
            <Greeting>Olá, </Greeting>
            <Username>{name}</Username>
          </Row>
          <Message>Hoje é dia de vitória</Message>
        </View>

        <ButtonIcon
          onPress={onButtonIconPress}
          Icon={<MaterialIcons name="add" size={24} color={theme.colors.heading} />}
        />
      </Content>
    </Container>
  );
}
