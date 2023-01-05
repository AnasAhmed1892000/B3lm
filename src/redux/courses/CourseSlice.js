import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  course: [],
};
export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, actions) => {
      state.course = actions.payload;
    },
  },
});
const courses = {
  courseSlice,
  setCourses: courseSlice.actions.setCourses,
};
export const selectCourses = state => state.courses.course;

export default courses;
