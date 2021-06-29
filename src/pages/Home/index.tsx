import React, { useCallback, useState } from 'react';
import { MotiView } from 'moti';
import { TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useAuth } from '@hooks/useAuth';
import { Appointment, useAppointments } from '@hooks/useAppointments';

import { AppointmentItem } from './AppointmentItem';

import {
  Container,
  Content,
  HomeProfile,
  AppointmentsList,
  HomeHeaderList,
  HomeCategoryList,
} from './styles';
import { Category } from '../../utils/categories';

export function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);

  const navigation = useNavigation();
  const appointmentsStorage = useAppointments();

  const { user } = useAuth('isAuthenticated');

  function handleCategoryChange(category: Category) {
    if (category.id === selectedCategoryId) {
      setSelectedCategoryId('');
      return;
    }

    setSelectedCategoryId(category.id);
    setFilteredAppointments(
      appointments.filter(appointment => appointment.category.id === category.id),
    );
  }

  function handleNavigateToAppointmentsDetails(appointment: Appointment) {
    navigation.navigate('ServerDetails', { appointment });
  }

  useFocusEffect(
    useCallback(() => {
      async function loadAppointments() {
        let storageAppointments = await appointmentsStorage.get();

        setAppointments(storageAppointments);

        if (selectedCategoryId) {
          storageAppointments = storageAppointments.filter(
            findAppointment => findAppointment.category.id === selectedCategoryId,
          );
        }

        setFilteredAppointments(storageAppointments);
      }

      loadAppointments();
    }, [selectedCategoryId, appointmentsStorage]),
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
