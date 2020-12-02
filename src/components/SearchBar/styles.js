import { StyleSheet } from 'react-native';
import { searchBlue } from '../../styles/color';

export default StyleSheet.create({
  searchbar: {
    backgroundColor: 'gray',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 50,


    // marginRight: 15,
    // marginLeft: 15,
    // marginBottom: 50,
    // marginTop: 10,
  },
  inputStyle: {
    backgroundColor: searchBlue,
    height: 60,
    fontSize: 20,
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  }
});
