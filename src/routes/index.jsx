import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ContactScreen from '../views/contactScreen';
import contactDetailScreen from '../views/contactDetailScreen';


const StackNavigator = createStackNavigator({
  ContactScreen,
  contactDetailScreen,
});
export default createAppContainer(StackNavigator);
