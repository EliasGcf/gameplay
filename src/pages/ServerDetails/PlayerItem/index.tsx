import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import { theme } from '@global/styles/theme';

import { Avatar } from '../../../components/Avatar';

import { Container, Content, Dot, Row, Status, UserInfo, Username } from './styles';

type PlayerItemProps = {
  name: string;
  imageUrl: string;
  status: 'on' | 'off';
  showBottomBorder?: boolean;
};

export function PlayerItem({
  name,
  imageUrl,
  status,
  showBottomBorder = true,
}: PlayerItemProps) {
  return (
    <Container>
      <Avatar urlImage={imageUrl} />

      <Content>
        <UserInfo>
          <Username>{name}</Username>

          <Row style={{ alignItems: 'center' }}>
            <Dot />
            <Status>{status === 'on' ? 'Disponível' : 'Ocupado'}</Status>
          </Row>
        </UserInfo>

        {showBottomBorder && (
          <LinearGradient colors={theme.colors.shapes.boxLinear} style={{ height: 1 }} />
        )}
      </Content>
    </Container>
  );
}
