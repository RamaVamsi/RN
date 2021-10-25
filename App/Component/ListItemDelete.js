import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import ColorPalette from '../Config/ColorPalette';

import Archive from '../Assets/svgs/archive.svg';

export default function ListItemDelete({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Archive height={50} width={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
    width: '100%',
    height: 80,
    marginTop: 20,
    padding: 13,
  },
});
