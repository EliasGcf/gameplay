import { ScrollView, ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const ContainerList = styled(ScrollView).attrs<any, ScrollViewProps>({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 40 },
  horizontal: true,
})``;
