import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const ServerSelect = styled(Row)`
  height: 68px;
  border-radius: 8px;
  padding-right: 24px;
  align-items: center;
  border: 1px solid #243189;
`;

export const Block = styled.View`
  width: 64px;
  height: 68px;
  border-radius: 8px;
  background: #1d2766;

  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;

  border-top-color: #243189;
  border-right-color: #243189;
  border-bottom-color: #243189;
`;

export const ServerSelectText = styled.Text`
  font-size: 18px;
  margin-right: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const ServerSelectDescription = styled.Text`
  color: ${theme.colors.subheading};
  font-size: 13px;
  font-family: ${theme.fonts.inter.regular};
  line-height: 17px;
  margin-top: 4px;
`;

export const ServerImage = styled.Image`
  width: 64px;
  height: 68px;
  margin: 0 0 0 -1px;

  border-radius: 8px;
`;