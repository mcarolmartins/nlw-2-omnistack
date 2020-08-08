import React from 'react';
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>
    </View>
  );
}

export default Favorites;