import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../values/colors';
import ProfileScreen from '../screens/home/ProfileScreen';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Entypo
                name={'home'}
                size={30}
                style={{
                  marginBottom: 3,
                  alignSelf: 'center',
                }}
                color={focused ? COLORS.blue : COLORS.lightGrey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Entypo
                name={'user'}
                size={30}
                style={{
                  marginBottom: 3,
                  alignSelf: 'center',
                }}
                color={focused ? COLORS.blue : COLORS.lightGrey}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
