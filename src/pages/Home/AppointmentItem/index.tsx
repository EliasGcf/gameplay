import { DiscordGuildImage } from '@components/DiscordGuildImage';
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
  name: string;
  date: string;
  guildId: string;
  category: string;
  isOwner: boolean;
  guildIcon?: string | null;
};

export function AppointmentItem({
  name,
  date,
  isOwner,
  guildId,
  category,
  guildIcon,
}: AppointmentItemProps) {
  return (
    <Container>
      <ImageBorderGradiente>
        <DiscordGuildImage guildId={guildId} guildIcon={guildIcon} />
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
