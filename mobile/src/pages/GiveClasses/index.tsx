import React from 'react';
import { View, Text, ImageBackground, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  //navigate
  const { goBack } = useNavigation();

  function handleNavigateBack(){
    Linking.openURL('http://192.168.100.6:3000/give-classes');
    // goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImg} style={styles.content} resizeMode='contain'>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar na nossa plataforma web.</Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Seguir para a plataforma</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;