import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorPalette from '../Config/ColorPalette';

export default function ListItemDelete() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
    width: '100%',
    height: 80,
    marginTop: 20,
  },
});
