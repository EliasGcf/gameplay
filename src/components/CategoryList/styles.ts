import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const ContainerList = styled.ScrollView.attrs<any, ScrollViewProps>({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 40 },
  horizontal: true,
})``;
