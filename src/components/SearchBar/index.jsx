import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements'
import { searchBarUpdate } from '../../services/contactService'
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      search: '',
      searchedList: [],
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

    async updateSearch (search) {
      //send the update to
      console.log(search)
      const { searchedList } = this.state;
      //const searched = await searchBarUpdate(search)
      //console.log(searched)
      //const { searchedList } = this.state;
      this.setState({ searchedList: await searchBarUpdate(search)})
      console.log(searchedList)
      //return searchedlist
      //this.setState({search: searched})
      //this.setState({searchedList: searched})
    };

    render() {
      const {changeText} = this.props
      //const { search } = this.state
      return (
        <SearchBar
          //inputStyle = "color: '#303030'"
          placeholderTextColor = {'#86939e'}
          placeholder="Search for contact"
          value={(search) => this.setState({ search })}
          onChangeText={this.updateSearch }
          //searchedList = {searchedList}
        />
      );
    }
};

export default Searchbar
