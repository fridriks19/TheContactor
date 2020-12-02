import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const ContactImage = ({ contactImage }) => (
  <Image
    style={styles.image}
    source={{ uri: contactImage }} />
);
//contactImage.propTypes = {
//  name: PropTypes.string.isRequired,
  // thumbnailPhoto: PropTypes.string.isRequired
//}
export default ContactImage;
