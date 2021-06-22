import React from 'react';
import { MotiView } from 'moti';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

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
              <Pressable onPress={() => navigation.navigate('ServerDetails')}>
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
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
            keyExtractor={item => item.id}
          />
        </MotiView>
      </Content>
    </Container>
  );
}
