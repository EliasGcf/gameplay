import React, { useEffect, useRef } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { ListHeader } from '../../components/ListHeader';
import { CategoryList } from '../../components/CategoryList';

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
} from './styles';
import { Keyboard } from 'react-native';

export function CreateAppointment() {
  const scrollViewRef = useRef<ScrollView>(null);
  const headerHeight = useHeaderHeight();

  function handleKeyboardShow() {
    scrollViewRef.current?.scrollToEnd();
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
    };
  }, []);

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
          <CategoryList showCardCheckbox styleCard={{ opacity: 0.5 }} />

          <Form>
            <ServerButton />

            <DateSection>
              <View>
                <ListHeader title="Dia e mês" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <NumberInput />
                  <InputSeparator>/</InputSeparator>
                  <NumberInput />
                </Row>
              </View>

              <View>
                <ListHeader title="Horário" style={{ marginBottom: 12 }} />
                <Row style={{ alignItems: 'center' }}>
                  <NumberInput />
                  <InputSeparator>:</InputSeparator>
                  <NumberInput />
                </Row>
              </View>
            </DateSection>

            <ListHeader
              title="Descrição"
              description="Max 100 caracteres"
              style={{ marginBottom: 12 }}
            />
            <TextArea style={{ textAlignVertical: 'top' }} />
          </Form>

          <SubmitButton>
            <SubmitButtonText>Agendar</SubmitButtonText>
          </SubmitButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
