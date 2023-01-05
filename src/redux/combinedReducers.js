import Splash from './splach/SplashSlice';
import {combineReducers} from '@reduxjs/toolkit';
import courses from './courses/CourseSlice';
import Login from './user/LoginSlice';
const rootReducer = combineReducers({
  splash: Splash.SplashSlice.reducer,
  courses: courses.courseSlice.reducer,
  login: Login.LoginSlice.reducer,
});
export default rootReducer;
