import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModalContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      contactImage: '',
    }
  }

saveContact=()=> {
  const { name, phoneNumber, contactImage } = this.state;
  let contactInfo = {
    name: name,
    phoneNumber: phoneNumber,
    contactImage: contactImage,
  }
  return contactInfo;
}

render() {
const {isOpen, closeModal, onPress} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text> Add new contact</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
        />
        <TextInput
          placeholder="Contact Image"
          style={styles.input}
          onChangeText={contactImage => this.setState({contactImage})}
        />
        <Button
        style={styles.button}
        title="Save contact"
        onPress={() => onPress(this.saveContact())}
        />
      </Modal>
    )
};

}

export default AddModalContact;
