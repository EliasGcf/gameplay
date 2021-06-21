import React from 'react';
import { MotiView } from 'moti';
import { View } from 'react-native';

import LogoTriangle from '../../assets/svgs/splashScreen-triangle.svg';
import LogoGame from '../../assets/svgs/logo-game.svg';
import LogoPlay from '../../assets/svgs/logo-play.svg';

import { Container, Row } from './styles';

export function SplashScreen() {
  return (
    <Container>
      <MotiView
        delay={300}
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <LogoTriangle />
      </MotiView>

      <Row>
        <MotiView
          delay={700}
          from={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <LogoGame />
        </MotiView>

        <View style={{ width: 5 }} />

        <MotiView
          delay={700}
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <LogoPlay />
        </MotiView>
      </Row>
    </Container>
  );
}
