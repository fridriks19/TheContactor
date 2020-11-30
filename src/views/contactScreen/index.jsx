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
    contactScreen: [],
    isAddModalOpen: false,
  }

  componentDidMount() {
    this.setState({contactScreen: 'SomeDataComesHere'})
  }

  addContact(contactInfo){
    const { contactScreens} = this.state
    //FileSystem.writeAsStringAsync(fileUrl, contents);
    alert('Contact ' + contactInfo.name + ' created')
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
        onPress={(contactInfo) => this.addContact(contactInfo)}
      />

      </View>
    )
  };

};

export default contactScreen;
