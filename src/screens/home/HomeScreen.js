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
