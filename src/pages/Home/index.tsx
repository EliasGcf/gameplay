import React, { useCallback, useState } from 'react';
import { MotiView } from 'moti';
import { TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Category } from '../../utils/categories';

import { useAuth } from '../../hooks/useAuth';

import { asyncStorageKeys } from '../../config/asyncStorageKeys';

import { AppointmentItem } from './AppointmentItem';

import {
  Container,
  Content,
  HomeProfile,
  AppointmentsList,
  HomeHeaderList,
  HomeCategoryList,
} from './styles';

export type Appointment = {
  id: string;
  date: string;
  category: Category;
  description: string;
  guild: {
    id: string;
    name: string;
    gameName: string;
    owner: boolean;
    icon: string | null;
  };
};

export function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const navigation = useNavigation();

  const { user } = useAuth('isAuthenticated');

  function handleCategoryChange(categoryId: string) {
    if (categoryId === selectedCategoryId) {
      setSelectedCategoryId('');
      return;
    }

    setSelectedCategoryId(categoryId);
    setFilteredAppointments(
      appointments.filter(appointment => appointment.category.id === categoryId),
    );
  }

  function handleNavigateToAppointmentsDetails(appointment: Appointment) {
    navigation.navigate('ServerDetails', { appointment });
  }

  useFocusEffect(
    useCallback(() => {
      async function loadAppointments() {
        const response = await AsyncStorage.getItem(asyncStorageKeys.appointments);

        let parsedAppointments: Appointment[] = response ? JSON.parse(response) : [];
        setAppointments(parsedAppointments);

        if (selectedCategoryId) {
          parsedAppointments = parsedAppointments.filter(
            findAppointment => findAppointment.category.id === selectedCategoryId,
          );
        }

        setFilteredAppointments(parsedAppointments);
      }

      loadAppointments();
    }, [selectedCategoryId]),
  );

  return (
    <Container>
      <HomeProfile
        name={user.firstName}
        imageUrl={user?.avatarUrl}
        onButtonIconPress={() => navigation.navigate('CreateAppointment')}
      />

      <Content>
        <HomeCategoryList
          selectedCategoryId={selectedCategoryId}
          onCardPress={handleCategoryChange}
          styleList={{ marginLeft: 24 }}
        />

        <MotiView
          style={{ flex: 1 }}
          from={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ type: 'timing', duration: 500 }}
        >
          <HomeHeaderList
            title="Partidas agendadas"
            description={`Total ${filteredAppointments.length}`}
          />

          <AppointmentsList
            data={filteredAppointments}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleNavigateToAppointmentsDetails(item)}
              >
                <AppointmentItem
                  date={item.date}
                  name={item.guild.name}
                  guildId={item.guild.id}
                  isOwner={item.guild.owner}
                  guildIcon={item.guild.icon}
                  category={item.category.title}
                />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
            keyExtractor={item => item.id}
          />
        </MotiView>
      </Content>
    </Container>
  );
}
