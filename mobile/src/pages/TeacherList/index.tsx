import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {

  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  function handleToggleFiltersVisible() {
    setIsVisibleFilter(!isVisibleFilter);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}
      >
        { isVisibleFilter && (
          <View style={styles.searchForm}>

            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Insira a  matéria"
            />

            <View style={styles.inputGroup}>            
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Insira o dia"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Insira o horário"
                />
              </View>

            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 5,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;