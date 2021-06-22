import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import { Container, Banner, Description, Image, Title } from './styles';

export function ServerDetails() {
  return (
    <Container>
      <Banner>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
          }}
        />

        <LinearGradient
          colors={[
            'rgba(18, 29, 51, 0)',
            'rgba(18, 29, 51, 0)',
            'rgba(18, 29, 51, 0.61)',
            'rgba(18, 29, 51, 0.83)',
            'rgba(18, 29, 51, 1)',
          ]}
          style={{
            height: 234,
            justifyContent: 'flex-end',
            paddingLeft: 24,
            paddingRight: 40,
            paddingBottom: 40,
            position: 'absolute',
          }}
        >
          <Title>Lendários</Title>

          <Description>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Description>
        </LinearGradient>
      </Banner>
    </Container>
  );
}
