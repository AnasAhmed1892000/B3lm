import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SchoolsScreen from '../screens/categeories/SchoolsScreen';
import CentersScreen from '../screens/categeories/CentersScreen';

import CoursesScreen from '../screens/categeories/CoursesScreen';
import COLORS from '../values/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import BottomTabNavigator from '../components/BottomTabNavigator';
import CourseDetailsScreen from '../screens/categeories/CourseDetailsScreen';
/*
 */
const BottomTab = createBottomTabNavigator();
const stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Schools"
        component={SchoolsScreen}
        options={{
          headerShown: true,
          title: '',
          headerBackVisible: false,
          headerStyle: {backgroundColor: COLORS.blue},
          headerRight: () => <BackArrow />,
        }}
      />
      <stack.Screen
        name="Centers"
        component={CentersScreen}
        options={{
          headerShown: true,
          title: '',
          headerBackVisible: false,
          headerStyle: {backgroundColor: COLORS.blue},
          headerRight: () => <BackArrow />,
        }}
      />
      <stack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          headerShown: true,
          title: '',
          headerBackVisible: false,
          headerStyle: {backgroundColor: COLORS.blue},
          headerRight: () => <BackArrow />,
        }}
      />
      <stack.Screen
        name="CourseDetails"
        component={CourseDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
const BackArrow = () => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon
          name="arrow-right-circle"
          size={25}
          style={{
            color: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default AppStack;
