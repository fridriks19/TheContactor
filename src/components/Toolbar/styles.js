import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    //backgroundColor: 'black',
    margin: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    
  },
  roundButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 80,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 50,
  }
});
