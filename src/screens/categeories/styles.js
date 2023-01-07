import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';
import {BorderRadius, MarginsAndPaddings} from '../../values/dimensions';

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
  backgroundStyle: {
    backgroundColor: COLORS.white,
    height: 50,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: BorderRadius.s,

    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 15,
    flex: 1,
    marginHorizontal: MarginsAndPaddings.s,
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default styles;
