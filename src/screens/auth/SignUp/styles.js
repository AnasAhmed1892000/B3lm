import {StyleSheet} from 'react-native';
import {MarginsAndPaddings} from '../../../values/dimensions';
import {BorderRadius} from '../../../values/dimensions';
import COLORS from '../../../values/colors';
const styles = StyleSheet.create({
  container: {
    paddingTop: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: MarginsAndPaddings.m,
  },
  titleContainer: {
    marginTop: MarginsAndPaddings.xxl,
    paddingTop: MarginsAndPaddings.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.blue,
    height: 45,
    borderRadius: BorderRadius.s,
    marginHorizontal: MarginsAndPaddings.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MarginsAndPaddings.xxxl,
  },
  fLine: {backgroundColor: '#b2b2b2', height: 1, width: '41%'},
  OTPScreenContianer: {
    flex: 1,

    backgroundColor: COLORS.blue,
  },
  upper: {
    backgroundColor: COLORS.blue,
    flex: 1,
    paddingHorizontal: MarginsAndPaddings.l,
  },
  lower: {
    backgroundColor: COLORS.white,

    height: '60%',
    borderTopLeftRadius: 50,
    paddingHorizontal: MarginsAndPaddings.l,
  },
});
export default styles;
