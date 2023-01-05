import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
import {Input} from 'react-native-elements';
import COLORS from '../values/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';
const InputView = ({
  loading,
  values,
  touched, //for onBlur Method
  errors,
  handelChange,
  handleBlur,
  name, // name of the field that gonna be accessed
  title,
  placeholder,
  secureTextEntry,
  containerStyling,
  titleStyling,
  type,
  ...porps
}) => {
  const [show, setShow] = useState(true);

  const [secure, setSecure] = useState(
    name == 'password' || name == 'Password' ? true : false,
  );
  return (
    <View style={[styles.container, containerStyling]}>
      <Text style={titleStyling}>{title}</Text>
      <Input
        {...porps}
        placeholder={placeholder}
        autoCompleteType={'off'}
        disabled={false} //disabled ={loading ? true : flase}  => disables inputs while loading submits
        placeholderTextColor="#888888"
        secureTextEntry={secure}
        value={values[name]}
        errorStyle={{
          color: COLORS.errorRed,
          fontFamily: 'Cairo-Bold',
        }}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: '#000',
          fontSize: 14,
          opacity: 0.7,
          fontFamily: 'Cairo-Bold',
        }}
        inputContainerStyle={{
          ...styles.textInputStyle,
          borderColor:
            errors[name] && touched[name] ? COLORS.errorRed : '#888888',
        }}
        onChangeText={handelChange(name)}
        onBlur={handleBlur(name)}
      />
      <>
        {name == 'password' || name == 'Password' ? (
          <>
            {show == true ? (
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  setShow(false);
                  setSecure(false);
                }}>
                <Icon name="eye" style={styles.icon} size={16} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  setShow(true);
                  setSecure(true);
                }}>
                <Icon name="eye-with-line" style={styles.icon} size={16} />
              </TouchableOpacity>
            )}
          </>
        ) : null}
      </>
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  container: {},
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    height: 45,
    marginTop: H * 0.01,
    paddingLeft: W * 0.03,
    fontFamily: 'Cairo-Bold',
    lineHeight: 24,
    backgroundColor: '#fff',
    borderColor: '#525252',
    fontSize: 12,
  },
  icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: -55,
    right: 30,
    marginLeft: -20,
  },
});
