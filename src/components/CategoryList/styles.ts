import { MotiScrollView } from 'moti';
import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const MotiContainerList = styled(MotiScrollView).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 40 },
  horizontal: true,
} as ScrollViewProps)`
  max-height: 120px;
`;
