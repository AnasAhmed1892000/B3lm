import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const OTPScreen = () => {
  return (
    <View style={styles.OTPScreenContianer}>
      <View style={styles.upper}>
        <OTPInputView pinCount={6} />
      </View>
      <View style={styles.lower}></View>
    </View>
  );
};

export default OTPScreen;
