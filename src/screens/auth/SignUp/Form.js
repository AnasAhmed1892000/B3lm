import {StyleSheet, Text, View, Button} from 'react-native';
import styles from './styles';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import Toast from 'react-native-toast-message';
import {useAppDispatch} from '../../../redux/Store';
import InputView from '../../../components/InputView';
const userSignUpCompleteValidation = yup.object().shape({
  fristName: yup
    .string()
    .min(2, 'Too Short ')
    .max(50, 'Too Long')
    .required('Required'),
  lastName: yup
    .string()
    .min(2, 'Too Short ')
    .max(50, 'Too Long')
    .required('Required'),
  phoneNum: yup.string().required('Required').phone('Required'),
  email: yup.string().email('Enter valid email').required('Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Required'),
});
const initialValues = {
  fristName: '',
  lastName: '',
  phoneNum: '',
  email: '',
  password: '',
};

const Form = () => {
  const dispatch = useAppDispatch();
  return (
    <Formik
      validationSchema={userSignUpCompleteValidation}
      initialValues={initialValues}
      onSubmit={values => {
        if (values === '') {
          console.log('برجاء ملء الخانات الفارغه');
          Toast.show({
            type: 'error',
            text1: 'برجاء ملء الخانات الفارغه',
          });
          return;
        }
        const fristName = values.fristName;
        const lastName = values.lastName;
        const phoneNum = values.phoneNum;
        const email = values.email;
        const password = values.password;
        // **place for api request**
      }}>
      {props => (
        <View>
          <InputView
            {...props}
            name={'fristName'}
            title={''}
            handelChange={props.handleChange}
            placeholder={'First Name'}
            handleBlur={props.handleBlur}
          />
          <InputView
            {...props}
            name={'lastName'}
            title={''}
            placeholder={'Last Name'}
            handelChange={props.handleChange}
            handleBlur={props.handleBlur}
          />
          <InputView
            {...props}
            name={'phoneNum'}
            title={''}
            placeholder={'Phone Number '}
            handelChange={props.handleChange}
            handleBlur={props.handleBlur}
          />
          <InputView
            {...props}
            name={'email'}
            title={''}
            placeholder={'ex@email.com'}
            handelChange={props.handleChange}
            handleBlur={props.handleBlur}
          />
          <InputView
            {...props}
            name={'password'}
            title={''}
            placeholder={'Password'}
            handelChange={props.handleChange}
            handleBlur={props.handleBlur}
            touched={props.touched}
          />
          <Button title="تسجيل الدخول " onPress={() => props.handleSubmit()} />
        </View>
      )}
    </Formik>
  );
};

export default Form;

// const styles = StyleSheet.create({});
