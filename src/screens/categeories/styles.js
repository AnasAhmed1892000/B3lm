import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';
import {BorderRadius} from '../../values/dimensions';

const styles = StyleSheet.create({
  SchoolContainer: {
    flex: 1,
  },
  Button: {
    flexDirection: 'row-reverse',
    width: 100,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.lightGrey,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: COLORS.XlightGrey,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
});
export default styles;
