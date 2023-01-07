import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSlector} from '../../redux/Store';

import {useAppDispatch} from '../../redux/Store';
/*
 */
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const select = useAppSlector;
  const navigation = useNavigation();
  const [selected, setSelected] = useState(''); //get the selected district from filter
  const [multiselected, setMultiSelected] = useState(''); //get the selected tags from filter
  const [Courses, setCourses] = useState([]); //store the retreived courses
  const [districts, setDistricts] = useState([]); //store the retreived District
  const [tags, setTags] = useState([]); //store the retreived tags
  var [formatedDistricts, setFormatedDistricts] = useState([]); //reformat district in an object
  var [formatedTags, setFormatedTags] = useState([]); //reformat district in an object

  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Schools')}>
          <View style={styles.categComponent}>
            <Image
              source={require('../../assets/icons/school.png')}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontWeight: '500',
                fontFamily: 'Cairo-Bold',
              }}>
              مدارس
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Centers')}>
          <View style={styles.categComponent}>
            <Image
              source={require('../../assets/icons/presentation.png')}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontWeight: '500',
                fontFamily: 'Cairo-Bold',
              }}>
              سنترات
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
          <View style={styles.categComponent}>
            <Image
              source={require('../../assets/icons/elearning.png')}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontWeight: '500',
                fontFamily: 'Cairo-Bold',
              }}>
              كورسات
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
