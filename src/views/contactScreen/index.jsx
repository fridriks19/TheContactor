//import { Buffer } from 'buffer';
//global.Buffer = Buffer;
import React, { Component } from 'react';
import * as Contacts from 'expo-contacts';
import Latinize from 'latinize';
import { View, FlatList, Text, SafeAreaView, TextInput } from 'react-native';
import Toolbar from '../../components/Toolbar';
import { addContact, getAllContacts, removeContact } from '../../services/contactService';
import SearchBar from '../../components/SearchBar';
import ContactList from '../../components/ContactList';
import PropTypes from 'prop-types';
import AddModalContact from '../../components/AddModalContact';
import styles from './styles';
import {backgroundColor} from '../../styles/color';


class contactScreen extends Component {
  state = {
    contactList: [],
    isAddModalOpen: false,
    search: '',
    filteredList: [],
    selectedContacts: [],
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

  onContactLongPress(contact)  {
    const { selectedContacts } =this.state;
    if (selectedContacts.indexOf(contact) !== -1){
      //the board is already in the list
      this.setState({
        selectedContacts: selectedContacts.filter(contac => contac !== contact)
      });
    } else {
      //The board needs to be added to the list
      this.setState({
        selectedContacts: [ ...selectedContacts, contact]
      });
    }
  }

  async deleteSelectedContacts(){
    const { selectedContacts, contactList } = this.state;
    await Promise.all(selectedContacts.map(contact => removeContact(contact)));
    this.setState({
      selectedContacts: [],
      contactList: contactList.filter(contact => selectedContacts.indexOf(contact) === -1),
    });
  }

  async getContactsAsync() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    }

  render() {
    const { isAddModalOpen, contactList, selectedContacts } = this.state;
    return (
        <View style={{flex: 1, backgroundColor: backgroundColor}}>
          <View>
            <SafeAreaView>
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor = {'#86939e'}
                placeholder="Search for contact"
                onChangeText={(value) => this.updateSearch(value)}>
              </TextInput>
            </SafeAreaView>
            </View>
          <ContactList
            contactList={contactList}
            selectedContacts={ selectedContacts }
            onLongPress={(contact) => this.onContactLongPress(contact) }
          />
          <Toolbar
            onAdd={() => this.setState({ isAddModalOpen: true })}
            onRemove={() => this.deleteSelectedContacts()}
            hasSelectedItem={selectedContacts.length > 0}
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
