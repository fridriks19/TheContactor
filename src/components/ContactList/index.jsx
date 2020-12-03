import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import ContactPhoto from '../ContactPhoto';

const Item = ({ item, isSelected, onLongPress, onPress }) => (
  <TouchableOpacity
    style={styles.item, isSelected ? styles.itemNot : styles.item }
    onPress={onPress}
    onLongPress={() => onLongPress(item)}>
    {
      isSelected
      ?
        <AntDesign name="checkcircle" style={styles.checkmark} />
      :
      <></>
    }
    <View style={styles.itemView}>
      <ContactPhoto
        contactImage={item.contactImage}
      />
      <Text style={styles.name}>{item.name}</Text>

    </View>
  </TouchableOpacity>
);

const ContactList = ({ contactList,navigation: { navigate }, onLongPress, selectedContacts }) => {
  //console.log("AAA", contactList)
  //have to read the filesystem

  const renderItem = ({ item }) => {
    //Stock image that shows up if no profile pic is chosen
    if (item.contactImage.length == 0){
      item.contactImage = 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg'
    }
  return (
    <Item
      item={item}
      onPress={() => navigate('contactDetailScreen', { contactInfo: item })}
      onLongPress={onLongPress}
      isSelected={selectedContacts.indexOf(item) !== -1}
    />
  );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        //if the list of contacts is empty
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text >No Contacts Found</Text>
          </View>
        )}
        numColumns={1}
        data={contactList}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber.toString()}
        extraData={ selectedContacts}
      />
    </SafeAreaView>
  );
};

export default withNavigation(ContactList);
