import SignUpScreen from '../screens/auth/SignUp/SignUpScreen';
import LoginScreen from '../screens/auth/Login/LoginScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OTPScreen from '../screens/auth/SignUp/OTPScreen';
const stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <stack.Navigator initialRouteName="SignUp">
      <stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default AuthStack;
