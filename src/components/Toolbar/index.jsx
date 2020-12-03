import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Toolbar = ( { onAdd, onRemove, hasSelectedItem } ) => (
  <View style={styles.screen}>
    <TouchableOpacity
      onPress={onAdd}
      style={styles.addButton}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onRemove}
      style={styles.deleteButton}>
      <Text style={styles.buttonText, hasSelectedItem ? {} : { color: 'gray' }}>Delete</Text>
    </TouchableOpacity>
  </View>
)

export default Toolbar;
