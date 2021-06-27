import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import { MotiProps } from 'moti';
import { MaterialIcons } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { ButtonIcon } from '../ButtonIcon';

import {
  Container,
  Row,
  Content,
  Message,
  Username,
  Greeting,
  Overlay,
  ModalCard,
  ModalCardText,
  ModalCardTextLogo,
  ModalCardButton,
  ModalCardButtonText,
} from './styles';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/useAuth';

export type ProfileProps = MotiProps<ViewStyle> & {
  name: string;
  imageUrl: string;
  style?: StyleProp<ViewStyle>;
  onButtonIconPress: () => void;
};

export function Profile({
  name,
  imageUrl,
  onButtonIconPress,
  style,
  ...rest
}: ProfileProps) {
  const { signOut } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container style={[{ alignItems: 'center' }, style]} {...rest}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleOpenModal}>
        <Avatar urlImage={imageUrl} />
      </TouchableOpacity>

      <Content>
        <View>
          <Row>
            <Greeting>Olá, </Greeting>
            <Username>{name}</Username>
          </Row>
          <Message>Hoje é dia de vitória</Message>
        </View>

        <ButtonIcon
          onPress={onButtonIconPress}
          Icon={<MaterialIcons name="add" size={24} color={theme.colors.heading} />}
        />
      </Content>

      <Modal
        visible={isModalOpen}
        transparent
        statusBarTranslucent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <Pressable style={{ flex: 1 }} onPress={handleCloseModal}>
          <Overlay>
            <ModalCard>
              <ModalCardText>
                Deseja sair do{' '}
                <ModalCardTextLogo>
                  Game<Text style={{ color: theme.colors.primary }}>Play</Text>?
                </ModalCardTextLogo>
              </ModalCardText>

              <Row>
                <ModalCardButton
                  onPress={handleCloseModal}
                  type="cancel"
                  style={{
                    borderWidth: 1,
                    borderColor: '#495BCC',
                    marginRight: 4,
                  }}
                >
                  <ModalCardButtonText>Não</ModalCardButtonText>
                </ModalCardButton>
                <ModalCardButton
                  type="success"
                  style={{ marginLeft: 4 }}
                  onPress={signOut}
                >
                  <ModalCardButtonText>Sim</ModalCardButtonText>
                </ModalCardButton>
              </Row>
            </ModalCard>
          </Overlay>
        </Pressable>
      </Modal>
    </Container>
  );
}
