import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

class AddModalContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      contactImage: '',
    }
  }

  async takePhoto(){
    const { thumbnail } = this.state
    const photo = await takePhoto();
    //if (photo.length > 0) {await addImage(photo); }
    //ALWAYS GET UNHANDLED ERROR
    //const newimage = await addImage(photo)
    this.setState({contactImage: photo})
  }
  async selectFromCameraRoll(){
    const { thumbnail } = this.state
    const photo = await selectFromCameraRoll();
    //ALWAYS GET UNHANDLED ERROR
    //const newimage = await addImage(photo)
    this.setState({contactImage: photo})
  }

saveContact=()=> {
  const { name, phoneNumber, contactImage } = this.state;
  let contactInfo = {
    name: name.replace(/\s/g, '_'),
    phoneNumber: phoneNumber,
    contactImage: contactImage,
  }
  Keyboard.dismiss()
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
          placeholder="Name (NO ICE LETTERS!)"
          style={styles.input}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
        />
        <Text> Select a contact image </Text>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={ () => this.takePhoto() }>
            <Entypo style={ styles.icon } name="camera" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.selectFromCameraRoll() }>
            <Entypo style={ styles.icon } name="image" />
          </TouchableOpacity>
        </View>

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
