import React from 'react';
import { CategoryList } from '../../components/CategoryList';

import { Container, Content, HomeHeader } from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <Content>
        <CategoryList />
      </Content>
    </Container>
  );
}
