import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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

import { Appointment, Guild, useAppointments } from '@hooks/useAppointments';
import { discordApi } from '../../services/discordApi';

import { Category } from '../../utils/categories';

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
  InputBorder,
  InputBox,
} from './styles';

export function CreateAppointment() {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);

  const scrollViewRef = useRef<ScrollView>(null);
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  const appointmentsStorage = useAppointments();

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

  function handleCategorySelected(category: Category) {
    setSelectedCategory(category);
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

      const data = response.data.map((guild: Record<string, unknown>) => {
        return {
          id: guild.id,
          name: guild.name,
          gameName: 'default',
          owner: guild.owner,
          icon: guild.icon,
        } as Guild;
      });

      setGuilds(data);
    }

    loadUserGuilds();
  }, []);

  async function handleSubmit() {
    if (!selectedCategory || !selectedGuild) return;

    const newAppointment: Appointment = {
      description,
      id: String(uuid.v4()),
      guild: selectedGuild,
      date: `${day}/${month} às ${hour}:${minute}h`,
      category: selectedCategory,
    };

    await appointmentsStorage.add(newAppointment);

    setSelectedCategory(null);
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
            styleCard={{ opacity: selectedCategory ? 0.5 : 1 }}
            onCardPress={handleCategorySelected}
            selectedCategoryId={selectedCategory?.id || ''}
          />

          <Form>
            <ServerButton
              game={selectedGuild?.gameName}
              guildName={selectedGuild?.name}
              guildId={selectedGuild?.id}
              guildIcon={selectedGuild?.icon}
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
              !!selectedCategory &&
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
                guildIcon={item.icon}
                guildId={item.id}
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
