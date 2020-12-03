import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { View,Button, Image, FlatList, Text, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';


//import ContactPhoto from '../ContactPhoto';


const ContactDetails = ({ contactDetail, onEdit }) => (

  <View style={styles.container}>
    <Image
      style={styles.profilePic}
      source={{ uri: contactDetail.contactImage }} />
    <Button
      title="Edit"
      style={styles.edit}
      //onPress={() => onPress("contactImage")}
      //onPress={onEdit}
    />
    <Text style={ styles.name }>{contactDetail.name}</Text>
    <Button
      title="Edit"
      style={styles.edit}
      //onPress={onEdit}
      //onPress={() => onPress("name")}
    />
    <Text style={ styles.number }>Phone number: {contactDetail.phoneNumber}</Text>
    <Button
      title="Edit"
      style={styles.edit}
      //onPress={() => onPress("phoneNumber")}
      onPress={onEdit}
    />
    <TouchableHighlight
      style={styles.callContainer}
      onPress={onEdit}>
      <View>
        <AntDesign name="phone" style={styles.icon} />
        <Text style={styles.callText}>Call</Text>
      </View>
    </TouchableHighlight>


  </View>
);

export default ContactDetails;
