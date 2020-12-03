import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { searchBlue, contactBlue } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 3,
    backgroundColor: contactBlue,
    width: winWidth - 40,
    borderRadius: 15,
  },
  itemNot: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 3,
    backgroundColor: contactBlue,
    width: winWidth - 40,
    borderRadius: 15,
    opacity: 0.4
  },
  name: {
    paddingTop: 18,
    textAlign: 'center',
    fontSize: 20
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
  position: 'absolute',
  top: 1,
  right: 2,
  fontSize: 27,
}
});
