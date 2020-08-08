import React from 'react';
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';

import styles from "./styles";

function TeacherItem(){
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/mcarolmartins.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Maria Carolina Martins de Almeida</Text>
          <Text style={styles.subject}>Programação pra Internet</Text>
        </View>
      </View>
      <Text style={styles.bio}>
      Maecenas non odio rutrum, fringilla arcu eu, varius neque. Curabitur eget quam gravida, fermentum lorem ac, posuere justo. In vel gravida diam. Fusce condimentum fermentum nulla ac interdum.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora: {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartIcon}></Image> */}
            <Image source={unfavorite}></Image>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsapp}></Image>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  );
}

export default TeacherItem;