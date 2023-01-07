import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {useAppDispatch} from '../../redux/Store';
import {selectUsername} from '../../redux/user/LoginSlice';
import {useAppSlector} from '../../redux/Store';
import {Button} from 'react-native';
import Login from '../../redux/user/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
  const [userName, setUserName] = useState('');
  const [bookedCourses, setBookedCourses] = useState([]);
  const [formatedGroups, setFormatedGroups] = useState([]);
  const dispatch = useAppDispatch();
  const select = useAppSlector;
  const getMe = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      var data = {
        token: token,
      };

      var config = {
        method: 'post',
        url: 'https://b3elm.com/api/auth/me',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      const response = await axios(config);
      console.log(response.data.email);
      setUserName(response.data.email);
    } catch (error) {
      console.log(error);
    }
  };
  const getBookedCourses = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      var data = JSON.stringify({
        token: token,
      });

      var config = {
        method: 'post',
        url: 'https://b3elm.com/api/auth/booked-courses',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      const response = await axios(config);
      console.log(response.data);
      setBookedCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookedCourses();
    getMe();
  }, []);

  //const userName = select(selectUsername);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Text>ProfileScreen</Text>
      <Text>user : {userName}</Text>
      <Text
        style={{
          marginHorizontal: 10,
          marginVertical: 15,
          fontSize: 20,
          fontWeight: '700',
        }}>
        Booked Courses :{' '}
      </Text>

      <FlatList
        data={bookedCourses}
        //key={formatedGroups.indexOf}
        renderItem={group => (
          <View>
            <Text> Name : {group.item.course_name}</Text>
            <Text> Group Name : {group.item.group_name}</Text>
            <Text>Group Price : {group.item.price}</Text>
            <Text>Group Start Date : {group.item.start_date}</Text>
            <Text>Group End Date : {group.item.end_date}</Text>
            <Text>Group Start Time : {group.item.start_time}</Text>
            <Text>Group End Time : {group.item.end_time}</Text>
            <Text> Number of days : {group.item.nom_days}</Text>
            <Text>
              {' '}
              Scheduele : {JSON.stringify(group.item.course_group_schedule)}
            </Text>
          </View>
        )}
      />
      <Button
        title="Logout"
        onPress={async () => {
          dispatch(Login.setCurrentUser(false));
          const key = 'token';
          await AsyncStorage.removeItem(key);
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
