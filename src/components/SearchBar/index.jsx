import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { SearchBar } from 'react-native-elements'
import { searchBarUpdate } from '../../services/contactService'
import { View, TouchableHighlight, Text, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';


const Searchbar=(onChangeText) => (
  <View style={styles.searchbar}>
    <SafeAreaView>
      <TextInput
        style={styles.inputStyle}
        placeholderTextColor = {'#86939e'}
        placeholder="Search for contact"
        onChangeText={value => onChangeText(value)}>
      </TextInput>
    </SafeAreaView>
  </View>
)

export default Searchbar
