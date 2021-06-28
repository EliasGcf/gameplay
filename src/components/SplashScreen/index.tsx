import React from 'react';
import { MotiView } from 'moti';
import { View } from 'react-native';

import { LogoGameSvg, LogoPlaySvg, LogoTriangleSvg } from '@components/svgs';

import { Container, Row } from './styles';

export function SplashScreen() {
  return (
    <Container>
      <MotiView
        delay={300}
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <LogoTriangleSvg />
      </MotiView>

      <Row>
        <MotiView
          delay={700}
          from={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <LogoGameSvg />
        </MotiView>

        <View style={{ width: 5 }} />

        <MotiView
          delay={700}
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <LogoPlaySvg />
        </MotiView>
      </Row>
    </Container>
  );
}
