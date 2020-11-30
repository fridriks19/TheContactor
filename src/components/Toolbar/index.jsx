import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Toolbar = ( { onAdd } ) => (
  <View style={styles.screen}>
    <TouchableOpacity
      onPress={onAdd}
      style={styles.roundButton1}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

  </View>
)

export default Toolbar;
