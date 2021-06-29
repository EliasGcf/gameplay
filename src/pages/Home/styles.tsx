import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Appointment } from '@hooks/useAppointments';

import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { CategoryList } from '../../components/CategoryList';
import { LinearBackground } from '../../components/LinearBackground';

export const Container = styled(LinearBackground)`
  flex: 1;
  padding-top: ${`${getStatusBarHeight() + 26}px`};
`;

export const HomeProfile = styled(Profile).attrs({
  from: { translateY: -100 },
  animate: { translateY: 0 },
  transition: { type: 'timing', duration: 500 },
})`
  padding: 0 24px;
`;

export const Content = styled.View`
  margin-top: 40px;
  flex: 1;
`;

export const HomeCategoryList = styled(CategoryList).attrs({
  from: { translateX: 200 },
  animate: { translateX: 0 },
  transition: { type: 'timing', duration: 500 },
})``;

export const HomeHeaderList = styled(ListHeader)`
  padding: 0 24px;
  margin-top: 40px;
`;

export const AppointmentsList = styled(FlatList as new () => FlatList<Appointment>).attrs(
  {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24, paddingBottom: 40, paddingTop: 24 },
  },
)``;
