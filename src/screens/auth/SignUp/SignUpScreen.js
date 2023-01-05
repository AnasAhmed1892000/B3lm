import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect, useMemo} from 'react';
//import Form from './Form';
import styles from './styles';
import InputView from '../../../components/InputView';
import {Formik} from 'formik';
import * as yub from 'yup';
import 'yup-phone';
import COLORS from '../../../values/colors';
import SocialAuthBtn from '../../../components/SocialAuthBtn';
import PhoneInput from 'react-native-phone-number-input';
import {BorderRadius, MarginsAndPaddings} from '../../../values/dimensions';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSlector} from '../../../redux/Store';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import axios from 'axios';
import Login from '../../../redux/user/LoginSlice';
import AsyncStorage from '@react-native-community/async-storage';
/*


*/
const SignUpValidation = yub.object().shape({
  firstName: yub.string().required('Required'),
  secondName: yub.string().required('Required'),
  email: yub
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yub
    .string()
    .required('Required')
    .min(6, 'Password must be at least 6 char'),
  Passowrd: yub
    .string()
    .oneOf([yub.ref('password'), null], 'Passwords must match'),
  gender: yub.number().required('Required'),
  phone: yub.number().required('Required'),
  //birthDate: yub.string().required('Requied'),
  gove: yub.number().required('Required'),
  // cent: yub.number().required('Required'),
  tags: yub.array().required('Required'),
});
/*


*/
const initialValue = {
  firstName: 'Anas',
  secondName: 'Eltanany',
  email: 'anas_3@gmail.com',
  password: '12345678',
  Passowrd: '',
  gender: 1,
  phone: '0106320020456',
  birth_date: '',
  gove: 1,
  tags: [13, 14],
};
/*


*/
const SignUpScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [selected, setSelected] = useState(''); //get the selected district from filter
  const [selectedGender, setSelectedGender] = useState(''); //get the selected district from filter

  const [multiselected, setMultiSelected] = useState(''); //get the selected tags from filter

  const [districts, setDistricts] = useState([]); //store the retreived District
  const [tags, setTags] = useState([]); //store the retreived tags
  var [formatedDistricts, setFormatedDistricts] = useState([]); //reformat district in an object
  var [formatedTags, setFormatedTags] = useState([]); //reformat district in an object
  /*


*/
  const userSignUp = async (
    first_name,
    second_name,
    email,
    password,
    gander,
    phone,
    birth_date,
    gove,
    tags,
  ) => {
    var data = {
      first_name: first_name,
      second_name: second_name,
      email: email,
      password: password,
      gander: gander,
      phone: phone,
      birth_date: birth_date,
      gove: gove,
      cent: 4,
      tags: tags,
    };
    var config = {
      method: 'post',
      url: 'https://b3elm.com/api/auth/signup',

      data: data,
    };
    try {
      const response = await axios(config);
      console.log(response.data);
      if (response.data.success == true) {
        dispatch(Login.setCurrentUser(true));
        console.log(response.data.access_token);
        await AsyncStorage.setItem('token', response.data.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //retrive the districts

  const getDistricts = async () => {
    try {
      const responce = await axios.get(
        `https://b3elm.com/api/main/districts?q=`,
      );

      const res = responce.data.data;

      setDistricts(res);
    } catch (error) {
      console.log(error);
    }
    // console.log(districts);

    return null;
  };
  /*


*/
  //retrive the courses tags
  const getTags = async () => {
    try {
      const responce = await axios.get(`https://b3elm.com/api/main/tags?q=`);

      const res = responce.data.data;
      setTags(res);
    } catch (error) {
      console.log(error);
    }
    //console.log(tags);
    return null;
  };
  /*


*/
  useEffect(() => {
    getDistricts();
    getTags();
  }, []);
  /* */
  useMemo(() => {
    setFormatedDistricts(
      districts.map(item => ({value: item.name, key: item.id})),
    );
    setFormatedTags(tags.map(item => ({value: item.name, key: item.id})));
  }, [districts, tags]);
  /*


*/
  const genderData = [
    {key: '1', value: 'Male'},
    {key: '0', value: 'Female'},
  ];
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <Formik
        validationSchema={SignUpValidation}
        initialValues={initialValue}
        onSubmit={values => {
          console.log(values.firstName);
          console.log(values.secondName);
          console.log(values.email);
          console.log(values.password);
          console.log(selectedGender);
          console.log(values.phone);
          console.log(values.birth_date);
          console.log(selected);
          console.log(multiselected);
          userSignUp(
            values.firstName,
            values.secondName,
            values.email,
            values.password,
            selectedGender,
            values.phone,
            values.birth_date,
            selected,
            multiselected,
          );
          // console.log(values.gender);
          // **place for api request**
        }}>
        {props => (
          <View>
            <View style={styles.titleContainer}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  fontFamily: 'Cairo-Bold',
                  fontWeight: '500',
                }}>
                انشئ حساب او سجل الدخول
              </Text>
            </View>
            <View
              style={{
                marginVertical: MarginsAndPaddings.xxl,

                height: '50%',
              }}>
              <ScrollView>
                <InputView
                  {...props}
                  name="firstName"
                  placeholder={'Enter Your First Name'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <InputView
                  {...props}
                  name="secondName"
                  placeholder={'Enter Your Second Name'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />

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
                <InputView
                  {...props}
                  name="Password"
                  placeholder={'Reenter Your Password'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <View
                  style={{
                    marginVertical: 15,
                    marginHorizontal: MarginsAndPaddings.l,
                  }}>
                  <SelectList
                    data={genderData}
                    placeholder="Gender"
                    //onSelect={props.handleChange}
                    setSelected={val => setSelectedGender(val)}
                    save="key"
                    dropdownItemStyles={{
                      marginHorizontal: 10,
                    }}
                  />
                </View>
                <InputView
                  {...props}
                  name="phone"
                  placeholder={'Enter Your Phone number'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <InputView
                  {...props}
                  name="birth_date"
                  placeholder={'Enter Your Birth Date'}
                  title=""
                  handelChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <View
                  style={{
                    marginVertical: 15,
                    marginHorizontal: MarginsAndPaddings.l,
                  }}>
                  <SelectList
                    data={formatedDistricts}
                    placeholder="Governement"
                    setSelected={val => setSelected(val)}
                    save="key"
                    dropdownItemStyles={{
                      marginHorizontal: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginVertical: 15,
                    marginHorizontal: MarginsAndPaddings.l,
                  }}>
                  <MultipleSelectList
                    setSelected={val => setMultiSelected(val)}
                    placeholder="Interests"
                    data={formatedTags}
                    save="key"
                    //onSelect={() => alert(selected)}
                    label="Interests"
                    dropdownItemStyles={{
                      marginHorizontal: 10,
                    }}
                  />
                </View>
              </ScrollView>
            </View>
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
            <View style={styles.line}>
              <View style={styles.fLine} />
              <Text style={{color: '#000', marginHorizontal: 20, fontSize: 18}}>
                أو
              </Text>
              <View style={styles.fLine} />
            </View>
          </View>
        )}
      </Formik>
      <View style={{marginTop: -130}}>
        <SocialAuthBtn />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingHorizontal: MarginsAndPaddings.m,
          paddingTop: Platform.OS == 'ios' ? 100 : 0,
          paddingTop: 200,
        }}>
        <Text
          style={{
            fontFamily: 'Cairo-Bold',
            fontSize: 14,
            fontWeight: '400',
          }}>
          بالفعل لديك حساب ؟{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: 'Cairo-Bold',
              fontSize: 14,
              fontWeight: '400',
            }}>
            سجل الدخول
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: 'Cairo-Bold',
              fontWeight: '400',
            }}>
            شروط واحكام شركة بعلم
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Cairo-Bold',
            fontWeight: '400',
          }}>
          بالاستمرار انت توافق على{' '}
        </Text>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SignUpScreen;

//const styles = StyleSheet.create({});
