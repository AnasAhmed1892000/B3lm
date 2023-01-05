import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';
import {BorderRadius, MarginsAndPaddings} from '../../values/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: MarginsAndPaddings.xxl,
  },
  categComponent: {
    backgroundColor: COLORS.white,
    width: 100,
    height: 100,
    borderRadius: BorderRadius.s,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: MarginsAndPaddings.xl,
  },
});
export default styles;
