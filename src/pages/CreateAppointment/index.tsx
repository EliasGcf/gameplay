import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHeaderHeight } from '@react-navigation/stack';
import uuid from 'react-native-uuid';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import { discordApi } from '../../services/discordApi';

import { categories } from '../../utils/categories';

import { ListHeader } from '../../components/ListHeader';
import { CategoryList } from '../../components/CategoryList';

import { asyncStorageKeys } from '../../config/asyncStorageKeys';
import { discordAuthConfig } from '../../config/discordAuthConfig';

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
  InputBorder,
  InputBox,
} from './styles';

type Guild = {
  id: string;
  name: string;
  gameName: string;
  imageUrl: string | null;
};

export function CreateAppointment() {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);

  const scrollViewRef = useRef<ScrollView>(null);
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleKeyboardShow() {
    scrollViewRef.current?.scrollToEnd();
  }

  function handleGuildSelected(guild: typeof guilds[0]) {
    setSelectedGuild(guild);
    closeModal();
  }

  function handleCategorySelected(categoryId: string) {
    setSelectedCategoryId(categoryId);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
    };
  }, []);

  useEffect(() => {
    async function loadUserGuilds() {
      const response = await discordApi.get('/users/@me/guilds');

      const data = response.data.map((guild: any) => {
        return {
          id: guild.id,
          name: guild.name,
          gameName: 'default',
          owner: guild.owner,
          imageUrl: guild.icon
            ? `${discordAuthConfig.cdnURL}/icons/${guild.id}/${guild.icon}.png`
            : null,
        } as Guild;
      });

      setGuilds(data);
    }

    loadUserGuilds();
  }, []);

  async function handleSubmit() {
    const newAppointment = {
      description,
      id: uuid.v4(),
      guild: selectedGuild,
      date: `${day}/${month} às ${hour}:${minute}h`,
      category: categories.find(category => category.id === selectedCategoryId),
    };

    const appointments = await AsyncStorage.getItem(asyncStorageKeys.appointments);
    const parsedAppointments = appointments ? JSON.parse(appointments) : [];

    await AsyncStorage.setItem(
      asyncStorageKeys.appointments,
      JSON.stringify([...parsedAppointments, newAppointment]),
    );

    setSelectedCategoryId('');
    setSelectedGuild(null);

    setDay('');
    setMonth('');
    setHour('');
    setMinute('');
    setDescription('');

    navigation.navigate('Home');
  }

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
          <CategoryList
            showCardCheckbox
            styleCard={{ opacity: selectedCategoryId ? 0.5 : 1 }}
            onCardPress={handleCategorySelected}
            selectedCategoryId={selectedCategoryId}
          />

          <Form>
            <ServerButton
              game={selectedGuild?.gameName}
              guildName={selectedGuild?.name}
              imageUrl={selectedGuild?.imageUrl}
              onPress={() => setIsModalOpen(true)}
            />

            <DateSection>
              <View>
                <ListHeader title="Dia e mês" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <InputBorder>
                    <InputBox>
                      <NumberInput maxLength={2} value={day} onChangeText={setDay} />
                    </InputBox>
                  </InputBorder>
                  <InputSeparator>/</InputSeparator>
                  <InputBorder>
                    <InputBox>
                      <NumberInput maxLength={2} value={month} onChangeText={setMonth} />
                    </InputBox>
                  </InputBorder>
                </Row>
              </View>

              <View>
                <ListHeader title="Horário" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <InputBorder>
                    <InputBox>
                      <NumberInput maxLength={2} value={hour} onChangeText={setHour} />
                    </InputBox>
                  </InputBorder>
                  <InputSeparator>:</InputSeparator>
                  <InputBorder>
                    <InputBox>
                      <NumberInput
                        maxLength={2}
                        value={minute}
                        onChangeText={setMinute}
                      />
                    </InputBox>
                  </InputBorder>
                </Row>
              </View>
            </DateSection>

            <ListHeader
              title="Descrição"
              description="Max 100 caracteres"
              style={{ marginBottom: 12 }}
            />
            <InputBorder style={{ height: 95, width: '100%' }}>
              <InputBox>
                <TextArea
                  style={{ textAlignVertical: 'top' }}
                  value={description}
                  onChangeText={setDescription}
                />
              </InputBox>
            </InputBorder>
          </Form>

          <SubmitButton
            onPress={handleSubmit}
            enabled={
              !!day &&
              !!month &&
              !!hour &&
              !!minute &&
              !!description &&
              !!selectedCategoryId &&
              !!selectedGuild
            }
          >
            <SubmitButtonText>Agendar</SubmitButtonText>
          </SubmitButton>
        </Container>
      </ScrollView>

      <GuildsModal closeModal={closeModal} visible={isModalOpen}>
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleGuildSelected(item)}
            >
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
