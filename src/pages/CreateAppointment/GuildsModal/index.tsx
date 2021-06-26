import React, { ReactNode } from 'react';
import { ModalProps, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Bar, Modal, Overlay } from './styles';

type GuildsModalProps = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function GuildsModal({ children, closeModal, ...rest }: GuildsModalProps) {
  return (
    <Modal
      onRequestClose={closeModal}
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
    >
      <Pressable style={{ flex: 1 }} onPress={closeModal}>
        <Overlay>
          <LinearGradient
            colors={['#0A1033', '#0E1647']}
            style={{
              height: '85%',
              paddingTop: 13,
              paddingLeft: 24,
              alignItems: 'center',
            }}
          >
            <Bar />

            <View style={{ flex: 1, marginTop: 24, width: '100%' }}>{children}</View>
          </LinearGradient>
        </Overlay>
      </Pressable>
    </Modal>
  );
}
