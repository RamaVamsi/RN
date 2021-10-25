import React from 'react';
import {View, Text, FlatList} from 'react-native';

import ListItem from '../Component/ListItem';

import {SwipeListView} from 'react-native-swipe-list-view';

import ListItemDelete from '../Component/ListItemDelete';

const advt = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../Assets/user.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../Assets/user.jpg'),
  },
];

export default function AdvtScreen(props) {
  const renderItem = (item, index) => (
    <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log('Message Selected', item)}
    />
  );

  return (
    /*     <FlatList
      data={advt}
      keyExtractor={advt => advt.id.toString()}
      renderItem={({item}) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log('Message Selected', item)}
        />
      )}
    /> */

    <SwipeListView
      data={advt}
      keyExtractor={advt => advt.id.toString()}
      /* ItemSeparatorComponent={itemSeparator} */
      renderItem={(data, rowMap) => renderItem(data.item, data.index)}
      renderHiddenItem={(data, rowMap) => <ListItemDelete />}
      leftOpenValue={150}
      rightOpenValue={0}
    />
  );
}
