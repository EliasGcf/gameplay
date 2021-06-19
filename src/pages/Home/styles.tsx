import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from '../../components/Header';

export const Container = styled.View`
  flex: 1;
  margin-top: ${`${getStatusBarHeight() + 26}px`};
`;

export const HomeHeader = styled.View.attrs({
  children: <Header />,
})`
  padding-left: 24px;
  padding-right: 24px;
`;
