import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import ContactDetails from '../../components/ContactDetails';
import PropTypes from 'prop-types';
import EditModalContact from '../../components/EditModalContact';
import {backgroundColor} from '../../styles/color';

class contactDetailScreen extends Component {
  state = {
    contactDetail: [],
    isEditModalOpen: false,
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({contactDetail: navigation.getParam('contactInfo', '')})
  }
  editContact(contactInfo){
    const { contactDetail } = this.state
    console.log(contactInfo)
    this.setState({contactDetail: contactInfo})
  }
  render() {

  const { contactDetail, isEditModalOpen } = this.state
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <ContactDetails
        isOpen={isEditModalOpen}
        closeModal={() => this.setState({ isEditModalOpen: false })}
        contactDetail={contactDetail}
        //onPress={(changeParam) => this.editContact(changeParam)}
        onEdit={ () => this.setState({ isEditModalOpen: true }) }
      />
      <EditModalContact
        contactDetail={contactDetail}
        isOpen={isEditModalOpen}
        closeModal={() => this.setState({ isEditModalOpen: false })}
        onPress={(contactInfo) => this.editContact(contactInfo)}
      />
    </View>
    )
  };

};

export default contactDetailScreen;
