import { Buffer } from 'buffer';
global.Buffer = Buffer;
//import * as FileSystem from 'expo-file-system';
//const contactDirectory = `${FileSystem.documentDirectory}contacts/`;
import React, { Component } from 'react';
//import uuid from 'react-native-uuid';
import { View, FlatList, Text, SafeAreaView, TextInput } from 'react-native';
import Toolbar from '../../components/Toolbar';
import { addContact, getAllContacts } from '../../services/contactService';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../components/ContactList';
import PropTypes from 'prop-types';
import AddModalContact from '../../components/AddModalContact';
import styles from './styles';


class contactScreen extends Component {
  state = {
    contactList: [],
    isAddModalOpen: false,
    search: '',
    filteredList: [],
  }

  async componentDidMount() {
    this.setState({ contactList: await getAllContacts(), filteredList: await getAllContacts() })
  }
  async addContact(contactInfo) {
    const { contactList } = this.state
    //Here we will save the contact to the file FileSystem
    //TODO Við ættum kannski að importa '../../services/Eitthvaðffoldewr' og gera virknina þar
    //const contactPath = `${contactDirectory}${contactInfo.name}-${uuid.v1()}.json`;
    await addContact(contactInfo);
    alert('Contact ' + contactInfo.name + ' created')
    //Reset the view/ updating the view with the new contaact
    this.setState({ contactList: await getAllContacts()})
  }
  //This needs to go to its own folder
  updateSearch = (value) => {
    const searchedContacts = this.state.filteredList.filter(
      contact => {
        let searchValue = value.toLowerCase()
        let contactLowerCase = (contact.name).toLowerCase()
        return contactLowerCase.indexOf(searchValue) > -1
      }
    )
    this.setState({ contactList: searchedContacts });
  }

  render() {
    const { isAddModalOpen, contactList } = this.state;
    return (
      <View style={styles.searchbar}>
        <SafeAreaView>
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor = {'#86939e'}
            placeholder="Search for contact"
            onChangeText={(value) => this.updateSearch(value)}>
          </TextInput>
        </SafeAreaView>

        <View style={{flex: 1}}>
          <ContactList
            contactList={contactList}
          />
          <Toolbar
            onAdd={() => this.setState({ isAddModalOpen: true })}
          //hasSelectedItem={selectedBoards.length > 0}
        />
        <AddModalContact
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          onPress={(contactInfo) => this.addContact(contactInfo)}
        />
        </View>
      </View>
    )
  };
};

export default contactScreen;
