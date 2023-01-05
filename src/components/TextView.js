import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
const TextView = ({title, ...props}) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {title}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS == 'ios' ? 'Georgia' : 'serif',
  },
});
export default TextView;
