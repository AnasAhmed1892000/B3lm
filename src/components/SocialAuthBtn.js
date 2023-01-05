import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import COLORS from '../values/colors';
import {MarginsAndPaddings} from '../values/dimensions';
import {BorderRadius} from '../values/dimensions';
const SocialAuthBtn = (
  name,

  icon,
  btnStyling,
  containerStyling,
  onPress,
) => {
  return (
    <View style={[styles.contianer, containerStyling]}>
      <TouchableOpacity style={[btnStyling, styles.btn]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/facebook.png')}
            style={{
              width: 25,
              height: 25,
              marginHorizontal: MarginsAndPaddings.s,
              marginRight: 120,
            }}
          />
          <Text style={styles.btnText}>Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[btnStyling, styles.btn]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/google.png')}
            style={{
              width: 25,
              height: 25,
              marginHorizontal: MarginsAndPaddings.s,
              marginRight: 120,
            }}
          />
          <Text style={styles.btnText}>Google</Text>
        </View>
      </TouchableOpacity>

      {Platform.OS == 'ios'
        ? () => (
            <TouchableOpacity style={[btnStyling, styles.btn]}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/icons/apple-logo.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginHorizontal: MarginsAndPaddings.s,
                    marginRight: 120,
                  }}
                />
                <Text style={styles.btnText}>Apple</Text>
              </View>
            </TouchableOpacity>
          )
        : null}
    </View>
  );
};

export default SocialAuthBtn;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    marginTop: 20,
  },
  btn: {
    height: 55,
    backgroundColor: COLORS.XlightGrey,
    borderRadius: BorderRadius.m,
    marginHorizontal: MarginsAndPaddings.m,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: MarginsAndPaddings.xl,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Cairo-Bold',
    color: COLORS.alfaBlack,
  },
});
