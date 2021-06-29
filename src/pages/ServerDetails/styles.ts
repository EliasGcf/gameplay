import { FlatList, Platform } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { LinearBackground } from '../../components/LinearBackground';
import { ListHeader } from '../../components/ListHeader';

import { theme } from '../../global/styles/theme';

import { Player } from './index';

export const Container = styled(LinearBackground)`
  flex: 1;
`;

export const Banner = styled.View`
  height: 234px;
`;

export const ImageGradiente = styled(LinearGradient).attrs({
  colors: [
    'rgba(18, 29, 51, 0)',
    'rgba(18, 29, 51, 0)',
    'rgba(18, 29, 51, 0.61)',
    'rgba(18, 29, 51, 0.83)',
    'rgba(18, 29, 51, 1)',
  ],
})`
  width: 100%;
  height: 234px;
  position: absolute;
  padding-left: 24px;
  padding-right: 40px;
  padding-bottom: 24px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Description = styled.Text`
  font-size: 13px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.inter.regular};
  line-height: 21px;
  margin-top: 12px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const ServerDetailsListHeader = styled(ListHeader)`
  padding: 0 24px 0 24px;
  margin-bottom: 24px;
`;

export const PlayersList = styled(FlatList as new () => FlatList<Player>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 },
})``;

export const Footer = styled.View`
  padding: 0 24px 0 24px;
  margin-top: 16px;
  margin-bottom: ${Platform.OS === 'ios' ? `${getBottomSpace()}px` : '16px'};
`;
