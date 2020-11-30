import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Searchbar = () => (
  <View styleName="horizontal" style={styles.searchbar}>
    <Text>SEARCH</Text>
  </View>
);

export default Searchbar
