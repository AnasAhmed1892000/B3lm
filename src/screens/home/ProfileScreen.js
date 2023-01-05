import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../redux/Store';
import {selectUsername} from '../../redux/user/LoginSlice';
import {useAppSlector} from '../../redux/Store';
import {Button} from 'react-native';
import Login from '../../redux/user/LoginSlice';
import AsyncStorage from '@react-native-community/async-storage';
const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const select = useAppSlector;
  const userName = select(selectUsername);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Text>ProfileScreen</Text>
      <Text>user name : {userName}</Text>
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
