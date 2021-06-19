import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../../global/styles/theme';

type UserTypeProps = {
  isOwner: boolean;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const ImageBorderGradiente = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
})`
  height: 68px;
  width: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Image = styled.Image`
  height: 66px;
  width: 62px;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  padding-right: 24px;

  justify-content: space-evenly;

  border-bottom-width: 1px;
  border-bottom-color: #1d2766;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  color: ${theme.colors.heading};
  font-size: 13px;
  font-family: ${theme.fonts.inter.medium};
  margin-left: 6px;
`;

export const UserType = styled.Text<UserTypeProps>`
  color: ${({ isOwner }) => (isOwner ? theme.colors.primary : theme.colors.on)};
  font-size: 13px;
  font-family: ${theme.fonts.inter.regular};
  margin-left: 4px;
`;
