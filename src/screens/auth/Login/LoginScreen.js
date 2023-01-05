import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import InputView from '../../../components/InputView';
import {Formik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../values/colors';
import SocialAuthBtn from '../../../components/SocialAuthBtn';
import PhoneInput from 'react-native-phone-number-input';
import {BorderRadius, MarginsAndPaddings} from '../../../values/dimensions';
import axios from 'axios';
import {useAppDispatch, useAppSlector} from '../../../redux/Store';
import {selectUsername, selectPassword} from '../../../redux/user/LoginSlice';
import Login from '../../../redux/user/LoginSlice';
import AsyncStorage from '@react-native-community/async-storage';
const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password must be at least 6 char'),
});
const initialValues = {
  email: 'anas_1@gmail.com',
  password: '12345678',
};
const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const select = useSelector;
  const userName = select(selectUsername);

  const userSignIn = async (email, password) => {
    var data = {
      email: email,
      password: password,
    };
    var config = {
      method: 'post',
      url: 'https://b3elm.com/api/auth/signin',

      data: data,
    };
    try {
      const response = await axios(config);
      //console.log(response);
      dispatch(Login.setCurrentUser(true));
      const first_name = response.data.student.first_name;
      const second_name = response.data.student.second_name;
      const username = first_name + ' ' + second_name;
      dispatch(Login.setUsername(username.toString()));
      dispatch(Login.setToken(response.data.access_token));
      await AsyncStorage.setItem('token', response.data.access_token);

      console.log(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          userSignIn(values.email, values.password);
          console.log(values.password);

          // **place for api request**
        }}>
        {props => {
          return (
            <View style={styles.container}>
              <View
                style={[
                  styles.upper,
                  {marginVertical: Keyboard == 'Keyboard Shown' ? -40 : null},
                ]}>
                <View style={styles.titleContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.white,
                      fontFamily: 'Cairo-Bold',
                      fontWeight: '500',
                    }}>
                    سجل الدخول
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: COLORS.offwhite,
                      fontFamily: 'Cairo-Bold',
                      fontWeight: '500',
                    }}>
                    تستطيع الاستمرار عبر
                  </Text>
                </View>
                <InputView
                  {...props}
                  name="email"
                  placeholder={'Enter Your Email'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />

                <InputView
                  {...props}
                  name="password"
                  placeholder={'Enter Your Password'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
              </View>
              <View style={styles.lower}>
                <TouchableOpacity
                  style={styles.btn}
                  disabled={!props.isValid}
                  onPress={() => props.handleSubmit()}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: '500',
                      fontFamily: 'Cairo-Bold',
                    }}>
                    تسجيل الدخول
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: MarginsAndPaddings.xxl}}>
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontFamily: 'Cairo-Bold',
                      fontWeight: '400',
                    }}>
                    هل نسيت كلمة المرور ؟
                  </Text>
                </TouchableOpacity>
                <View style={styles.line}>
                  <View style={styles.fLine} />
                  <Text
                    style={{color: '#000', marginHorizontal: 20, fontSize: 18}}>
                    أو
                  </Text>
                  <View style={styles.fLine} />
                </View>
                <SocialAuthBtn />
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;
