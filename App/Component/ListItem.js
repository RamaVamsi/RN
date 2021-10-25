import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
  Animated,
} from 'react-native';

import ColorPalette from '../Config/ColorPalette';

function ListItem({title, image, subTitle, onPress}) {
  return (
    <TouchableHighlight
      style={{backgroundColor: 'white', width: '100%', height: 100}}
      underlayColor={ColorPalette.white}
      onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: ColorPalette.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  subTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: Platform === 'android' ? 'Roboto' : 'Arial',
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontFamily: Platform === 'android' ? 'Roboto' : 'Arial',
    fontWeight: 'bold',
  },
});

export default ListItem;
