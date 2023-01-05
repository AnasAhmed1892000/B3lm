import {StyleSheet, Keyboard} from 'react-native';
import COLORS from '../../../values/colors';
import {MarginsAndPaddings} from '../../../values/dimensions';
import {BorderRadius} from '../../../values/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    flex: 1,
    paddingTop: MarginsAndPaddings.ml,
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
  upper: {
    backgroundColor: COLORS.blue,
    flex: 1,
    paddingHorizontal: MarginsAndPaddings.l,
    paddingVertical: -10,
  },
  lower: {
    paddingTop: 30,
    backgroundColor: COLORS.white,

    height: '50%',
    borderTopLeftRadius: 60,
    paddingHorizontal: MarginsAndPaddings.l,
    marginHorizontal: -8,
  },
});
export default styles;
