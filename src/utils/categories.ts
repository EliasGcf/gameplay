import { SvgProps } from 'react-native-svg';

import { DuelSvg, FunSvg, RankedSvg, TrainingSvg } from '@components/svgs';

export type Category = {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
};

export const categories = [
  { id: '1', title: 'Ranqueada', icon: RankedSvg },
  { id: '2', title: 'Duelo 1x1', icon: DuelSvg },
  { id: '3', title: 'Diversão', icon: FunSvg },
  { id: '4', title: 'Treino', icon: TrainingSvg },
];
