import { Modal as RNModal } from 'react-native';
import styled from 'styled-components/native';

export const Modal = styled(RNModal)`
  flex: 1;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.85);
`;

export const Bar = styled.View`
  height: 2px;
  width: 39px;
  background: #495bcc;
  border-radius: 2px;
`;
