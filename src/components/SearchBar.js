import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../values/colors';
import {BorderRadius, MarginsAndPaddings} from '../values/dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search1" size={15} />
      <TouchableOpacity onPress={() => navigation.navigate('FilterSearch')}>
        <TextInput
          style={styles.inputStyle}
          placeholder="بحث"
          autoCapitalize="none"
          autoCorrect={false}
          value={term}
          onChangeText={onChangeTerm}
          onEndEditing={onTermSubmit}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default SearchBar;
