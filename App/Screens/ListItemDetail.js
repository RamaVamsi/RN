import React from 'react';

import {
  Card,
  Text,
  TextInput,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import ColorPalette from '../Config/ColorPalette';

import ListItem from '../Component/ListItem';

function ListItemDetail(props) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={require('../Assets/jacket.jpg')}
      />
      <View style={styles.detailcontainer}>
        <Text style={styles.cardTitle}>Hoodie</Text>
        <Text style={styles.cardSubtitle}>Rs.2000</Text>
        <ListItem
          image={require('../Assets/user.jpg')}
          title="Ram"
          subTitle="8 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: ColorPalette.cardbgm,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
  },
  cardTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: 'red',
    fontWeight: '700',
  },
  detailcontainer: {
    padding: 15,
    backgroundColor: ColorPalette.secondary,
    width: '100%',
    height: 80,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default ListItemDetail;
