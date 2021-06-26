import React, { useEffect, useRef, useState } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import { ListHeader } from '../../components/ListHeader';
import { CategoryList } from '../../components/CategoryList';

import { GuildItem } from './GuildItem';
import { GuildsModal } from './GuildsModal';
import { ServerButton } from './ServerButton';

import {
  Container,
  DateSection,
  Form,
  InputSeparator,
  NumberInput,
  Row,
  SubmitButton,
  SubmitButtonText,
  TextArea,
} from './styles';

const guilds = [
  {
    id: '1',
    name: 'Lendários',
    gameName: 'League of Legends',
    imageUrl:
      'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
  },
  {
    id: '2',
    name: 'Yeah, boy',
    gameName: 'Red Dead Redemption 2',
    imageUrl:
      'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
  },
  {
    id: '3',
    name: 'Rumo ao topo',
    gameName: 'Counter Strike: GO',
    imageUrl:
      'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
  },
  {
    id: '4',
    name: 'Bora queimar tudo',
    gameName: 'Apex Legends',
    imageUrl:
      'https://res.cloudinary.com/eliasgcf/image/upload/v1624386003/image_1_oiiy4c.png',
  },
];

export function CreateAppointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const headerHeight = useHeaderHeight();

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleKeyboardShow() {
    scrollViewRef.current?.scrollToEnd();
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <ListHeader title="Categoria" style={{ marginBottom: 12 }} />
          <CategoryList showCardCheckbox styleCard={{ opacity: 0.5 }} />

          <Form>
            <ServerButton onPress={() => setIsModalOpen(true)} />

            <DateSection>
              <View>
                <ListHeader title="Dia e mês" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <NumberInput />
                  <InputSeparator>/</InputSeparator>
                  <NumberInput />
                </Row>
              </View>

              <View>
                <ListHeader title="Horário" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <NumberInput />
                  <InputSeparator>:</InputSeparator>
                  <NumberInput />
                </Row>
              </View>
            </DateSection>

            <ListHeader
              title="Descrição"
              description="Max 100 caracteres"
              style={{ marginBottom: 12 }}
            />
            <TextArea style={{ textAlignVertical: 'top' }} />
          </Form>

          <SubmitButton>
            <SubmitButtonText>Agendar</SubmitButtonText>
          </SubmitButton>
        </Container>
      </ScrollView>

      <GuildsModal closeModal={closeModal} visible={isModalOpen}>
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <GuildItem
                name={item.name}
                game={item.gameName}
                imageUrl={item.imageUrl}
                showBottomBorder={index + 1 !== guilds.length}
              />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      </GuildsModal>
    </KeyboardAvoidingView>
  );
}
