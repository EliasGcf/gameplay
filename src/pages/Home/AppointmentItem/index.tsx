import React from 'react';

import CalendarSvg from '../../../assets/svgs/calendar.svg';
import PlayerSvg from '../../../assets/svgs/player.svg';

import { ListHeader } from '../../../components/ListHeader';
import { theme } from '../../../global/styles/theme';

import {
  Container,
  Content,
  Hour,
  Image,
  ImageBorderGradiente,
  InformationContainer,
  Row,
  UserType,
} from './styles';

type AppointmentItemProps = {
  imageUrl: string;
  name: string;
  category: string;
  date: string;
  isOwner: boolean;
};

export function AppointmentItem({
  imageUrl,
  name,
  category,
  date,
  isOwner,
}: AppointmentItemProps) {
  return (
    <Container>
      <ImageBorderGradiente>
        <Image source={{ uri: imageUrl }} />
      </ImageBorderGradiente>

      <Content>
        <ListHeader title={name} description={category} />

        <InformationContainer>
          <Row>
            <CalendarSvg width={16} height={16} />
            <Hour>{date}</Hour>
          </Row>
          <Row>
            <PlayerSvg
              width={16}
              height={16}
              fill={isOwner ? theme.colors.primary : theme.colors.on}
            />
            <UserType isOwner={isOwner}>{isOwner ? 'Anfitrião' : 'Visitante'}</UserType>
          </Row>
        </InformationContainer>
      </Content>
    </Container>
  );
}
