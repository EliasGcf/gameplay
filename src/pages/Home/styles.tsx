import React from 'react';
import { MotiView } from 'moti';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { LinearBackground } from '../../components/LinearBackground';
import { CategoryList, CategoryListProps } from '../../components/CategoryList';

import { Appointment } from '../../utils/appointments';

export const Container = styled(LinearBackground)`
  flex: 1;
  padding-top: ${`${getStatusBarHeight() + 26}px`};
`;

export const HomeHeader = styled(MotiView).attrs({
  from: { translateY: -100 },
  animate: { translateY: 0 },
  transition: { type: 'timing', duration: 500 },
  children: <Header />,
})`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Content = styled.View`
  margin-top: 40px;
  flex: 1;
`;

export const HomeCategoryList = styled(MotiView).attrs(props => {
  return {
    from: { translateX: 200 },
    animate: { translateX: 0 },
    transition: { type: 'timing', duration: 500 },
    children: <CategoryList {...props} />,
  };
})<CategoryListProps>``;

export const HomeHeaderList = styled(ListHeader)`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 40px;
`;

export const AppointmentsList = styled(FlatList as new () => FlatList<Appointment>).attrs(
  {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24, paddingBottom: 40, paddingTop: 24 },
  },
)``;
