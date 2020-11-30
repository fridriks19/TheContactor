import React, { Component } from 'react';
import * as FileSystem from 'expo-file-system';
import { View, FlatList, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../components/ContactList';
import PropTypes from 'prop-types';
import AddModalContact from '../../components/AddModalContact';
import styles from './styles';


class contactScreen extends Component {
  state = {
    contactScreens: [],
    isAddModalOpen: false,
  }

  componentDidMount() {
    this.setState({contactScreen: 'SomeDataComesHere'})
  }

  render() {
    const { isAddModalOpen } = this.state;
    return (
      <View>
        <SearchBar
        />
        
        <Toolbar
          style={styles.screen}
          onAdd={() => this.setState({ isAddModalOpen: true })}
        //hasSelectedItem={selectedBoards.length > 0}
      />
      <AddModalContact
        isOpen={isAddModalOpen}
        closeModal={() => this.setState({ isAddModalOpen: false })}
        //onPress={(myArray) => this.addBoard(myArray)}
        //takePhoto={() => this.takePhoto()}
        //selecteFromCameraRoll={() => this.selecteFromCameraRoll()}
      />

      </View>
    )
  };

};

export default contactScreen;
