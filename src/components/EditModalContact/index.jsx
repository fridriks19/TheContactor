import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

class EditModalContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      contactImage: "",
    }
  }
  componentDidMount() {
    const {contactDetail} = this.props
    this.setState({ name: contactDetail.name, phoneNumber: contactDetail.phoneNumber, contactImage: contactDetail.contactImage})
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
      name: name,
      phoneNumber: phoneNumber,
      contactImage: contactImage,
    }
    Keyboard.dismiss()
    return contactInfo;
  }
    render() {
        const { isOpen, closeModal, onPress, contactDetail } = this.props;
        return (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <Text> Edit this contact</Text>
            <TextInput
              placeholder={contactDetail.name}
              style={styles.input}
              onChangeText={name => this.setState({name})}
            />
            <TextInput
              placeholder={contactDetail.phoneNumber}
              style={styles.input}
              onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
            <Text> Change contact Image </Text>
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
            title="Save changes"
            onPress={() => onPress(this.saveContact())}
            />
          </Modal>
        );
    }
}

export default EditModalContact;
