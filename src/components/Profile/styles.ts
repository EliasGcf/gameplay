import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled(MotiView)`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  font-size: 24px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.rajdhani.medium};
`;

export const Username = styled.Text`
  font-size: 24px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.rajdhani.bold};
`;

export const Message = styled.Text`
  font-size: 13px;
  color: ${theme.colors.texts.body};
  font-family: ${theme.fonts.inter.regular};
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.85);
`;

export const ModalCard = styled(LinearGradient).attrs({
  colors: ['#0A1033', '#0E1647'],
})`
  height: 174px;
  padding: 24px 24px 0 24px;
  align-items: center;
`;

export const ModalCardText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.rajdhani.medium};
`;

export const ModalCardTextLogo = styled.Text`
  font-family: ${theme.fonts.rajdhani.bold};
`;

type ModalCardButtonProps = {
  type: 'cancel' | 'success';
};

export const ModalCardButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ModalCardButtonProps>`
  height: 56px;
  width: 100%;
  max-width: 160px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background: ${({ type }) =>
    type === 'success' ? theme.colors.brand.primary : 'transparent'};
  border-radius: 8px;
`;

export const ModalCardButtonText = styled.Text`
  font-size: 15px;
  color: ${theme.colors.texts.heading};
  font-family: ${theme.fonts.inter.medium};
`;
