import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    //backgroundColor: 'black',
    margin: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 80,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 20,
  },
  deleteButton:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 80,
    //marginRight: 100,
    backgroundColor: 'red',
  },
  deleteButtonEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 80,
    //marginRight: 100,
    backgroundColor: 'red',
    opacity: 0.5
  }
});
