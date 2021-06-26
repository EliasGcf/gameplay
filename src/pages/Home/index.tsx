import React, { useState } from 'react';
import { MotiView } from 'moti';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppointmentItem } from './AppointmentItem';

import { useAuth } from '../../hooks/useAuth';

import { categories } from '../../utils/categories';
import { appointments } from '../../utils/appointments';

import {
  Container,
  Content,
  HomeHeader,
  AppointmentsList,
  HomeHeaderList,
  HomeCategoryList,
} from './styles';

export function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const navigation = useNavigation();

  const { user } = useAuth('isAuthenticated');

  function handleOnCardPress(categoryId: string) {
    if (categoryId === selectedCategoryId) {
      setSelectedCategoryId('');
      return;
    }

    setSelectedCategoryId(categoryId);
  }

  return (
    <Container>
      <HomeHeader
        name={user.firstName}
        imageUrl={user?.avatarUrl}
        onButtonIconPress={() => navigation.navigate('CreateAppointment')}
      />

      <Content>
        <HomeCategoryList
          selectedCategoryId={selectedCategoryId}
          onCardPress={handleOnCardPress}
          style={{ marginLeft: 24 }}
        />

        <MotiView
          style={{ flex: 1 }}
          from={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ type: 'timing', duration: 500 }}
        >
          <HomeHeaderList
            title="Partidas agendadas"
            description={`Total ${appointments.length}`}
          />

          <AppointmentsList
            data={appointments}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('ServerDetails')}
              >
                <AppointmentItem
                  name={item.guild.name}
                  category={
                    categories.find(category => category.id === item.category)?.title ||
                    ''
                  }
                  date={item.date}
                  isOwner={item.guild.owner}
                  imageUrl={item.guild.icon}
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
