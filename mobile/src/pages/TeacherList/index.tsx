import React from 'react';
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"/>
    </View>
  );
}

export default TeacherList;