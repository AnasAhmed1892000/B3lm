import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch} from '../../redux/Store';
import Splash from '../../redux/splach/SplashSlice';
//import User from '../../redux/user/LoginSlice';
const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(Splash.setIsSplashDone({}));
    }, 2500);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: 'black',
        }}>
        SplashScreen
      </Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
