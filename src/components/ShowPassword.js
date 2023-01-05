import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const ShowPassword = () => {
  const [show, setShow] = useState(true);
  const [secure, setSecure] = useState(true);
  return (
    <View>
      {show == true ? (
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setShow(false);
            setSecure(false);
          }}>
          <Entypo name="eye-with-line" style={styles.icon} size={18} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setShow(true);
            setSecure(true);
          }}>
          <Entypo name="eye" style={styles.icon} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ShowPassword;

const styles = StyleSheet.create({});
