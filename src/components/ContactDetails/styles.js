import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { searchBlue, interactiveBlue, darkBlueShade,  } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#215280',
    margin: 15,
    borderRadius: 30
  },
  name: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    color: "white"
  },
  number: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    fontSize: 20
  },
  callContainer:{
    marginTop: 40,
    backgroundColor: '#282829',
    paddingLeft: 120,
    paddingRight: 120,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  callText:{
    fontSize: 30,
    color: interactiveBlue,
    fontWeight: 'bold'
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 350,
    borderRadius: 180,
    borderColor: darkBlueShade,
    borderWidth: 10
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 70,
    bottom: 5,
    fontSize: 26,
    color: interactiveBlue,
  },
  edit: {
    //alignItems: 'flex-end',
    //backgroundColor: '#282829',
    //borderRadius: 10,
    //borderRadius: 10,
    //borderWidth: 2,
  }
});
