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
      image: '',
    }
  }

render () {
const {isOpen, closeModal} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >

        <Text> This is create Modal</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="PhoneNumber"
          style={styles.input}
          onChangeText={name => this.setState({phoneNumber})}
        />
        <TextInput
          placeholder="Image"
          style={styles.input}
          onChangeText={name => this.setState({image})}
        />
      </Modal>
    )
};

}

export default AddModalContact;
