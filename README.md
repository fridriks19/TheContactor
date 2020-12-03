# TheContactor
**REMEMBER TO NPM INSTALL**
**ICELANDIC LETTERRS NOT ALLOWED**

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

const Item = ({ item }) => (
  <TouchableOpacity
    style={styles.item}>
    <View style={styles.itemView}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const ContactDetails = ({ contactDetail }) => {
  console.log("AAA", contactDetail)
  const renderItem = ({ item }) => {
  console.log("***************")
  console.log(item)
  return (
    <Item
      item={item}
    />
  );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        data={contactDetail}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber.toString()}
      />
    </SafeAreaView>
  );
};

export default ContactDetails;
