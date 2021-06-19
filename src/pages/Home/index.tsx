import React from 'react';
import { View } from 'react-native';

import { CategoryList } from '../../components/CategoryList';

import { AppointmentItem } from './AppointmentItem';

import { categories } from '../../utils/categories';
import { appointments } from '../../utils/appointments';

import {
  Container,
  Content,
  HomeHeader,
  AppointmentsList,
  HomeHeaderList,
} from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <Content>
        <CategoryList />

        <HomeHeaderList
          title="Partidas agendadas"
          description={`Total ${appointments.length}`}
        />

        <View style={{ flex: 1 }}>
          <AppointmentsList
            data={appointments}
            renderItem={({ item }) => (
              <AppointmentItem
                name={item.guild.name}
                category={
                  categories.find(category => category.id === item.category)?.title || ''
                }
                date={item.date}
                isOwner={item.guild.owner}
                imageUrl={item.guild.icon}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
            keyExtractor={item => item.id}
          />
        </View>
      </Content>
    </Container>
  );
}
