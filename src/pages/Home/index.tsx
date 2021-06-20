import React from 'react';
import { MotiView } from 'moti';
import { View } from 'react-native';

import { AppointmentItem } from './AppointmentItem';

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
  return (
    <Container>
      <HomeHeader />

      <Content>
        <HomeCategoryList />

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
        </MotiView>
      </Content>
    </Container>
  );
}
