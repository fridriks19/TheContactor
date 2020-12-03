import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

class EditModalContact extends React.Component {
    render() {
        const { isOpen, closeModal, onPress } = this.props;
        return (
            <Modal
                isOpen={ isOpen }
                closeModal={ closeModal }>
                <TouchableOpacity
                    onPress={ () => takePhoto() }>
                    <Entypo style={ styles.icon } name="camera" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => selectFromCameraRoll() }>
                    <Entypo style={ styles.icon } name="image" />
                </TouchableOpacity>
            </Modal>
        );
    }
}

export default EditModalContact;
