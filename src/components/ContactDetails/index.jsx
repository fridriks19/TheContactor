import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { View,Button, Image, FlatList, Text, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';


//import ContactPhoto from '../ContactPhoto';


const ContactDetails = ({ contactDetail, onEdit, onCall }) => (

  <View style={styles.container}>
    <View style={styles.edit}>
      <Button
        title="Edit"
        //onPress={() => onPress("contactImage")}
        onPress={onEdit}
      />
    </View>
    <Image
      style={styles.profilePic}
      source={{ uri: contactDetail.contactImage }} />
    <Text style={ styles.name }>{contactDetail.name}</Text>
    <Text style={ styles.number }>Phone number: {contactDetail.phoneNumber}</Text>
    <TouchableHighlight
      style={styles.callContainer}
      onPress={onCall}>
      <View>
        <AntDesign name="phone" style={styles.icon} />
        <Text style={styles.callText}>Call</Text>
      </View>
    </TouchableHighlight>


  </View>
);

export default ContactDetails;
