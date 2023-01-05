import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isModalOpened: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalOpened: (state, actions) => {
      state.modal = !isModalOpened;
    },
  },
});
const Modal = {
  modalSlice,
  setisModalOpened: modalSlice.actions.setIsModalOpened,
};
export const selectIsModalOpened = state => state.splash.isModalOpened;
export default courses;
