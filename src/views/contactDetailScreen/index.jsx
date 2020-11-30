import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

class contactDetailScreen extends Component {
  state = {
    contactDetailScreens: [],
  }

  componentDidMount() {
    this.setState({contactDetailScreen: 'SomeDataComesHere'})
  }

  render() {
    return (
      <View>


      </View>
    )
  };

};

export default contactDetailScreen;
