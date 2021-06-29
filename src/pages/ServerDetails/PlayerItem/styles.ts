import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled(Row)`
  height: 60px;
`;

export const Content = styled.View`
  flex: 1;
  align-self: flex-end;
  margin-left: 16px;
`;

export const UserInfo = styled.View`
  margin-bottom: 12px;
`;

export const Username = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.rajdhani.bold};
  color: ${theme.colors.texts.heading};
`;

export const Dot = styled.View`
  height: 8px;
  width: 8px;
  background: ${theme.colors.others.online};
  border-radius: 4px;
`;

export const Status = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.inter.regular};
  color: ${theme.colors.texts.body};
  margin-left: 8px;
  line-height: 17px;
`;
