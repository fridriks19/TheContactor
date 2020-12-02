import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements'
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

class Searchbar extends Component {
  state = {
      search: '',
    };

    updateSearch = (search) => {
      this.setState({ search });
    };

    render() {
      const { search } = this.state;

      return (
        <SearchBar
          //inputStyle = "color: '#303030'"
          placeholderTextColor = {'#86939e'}
          placeholder="Search for contact"
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
};

export default Searchbar
