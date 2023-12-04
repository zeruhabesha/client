import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  profilePic: '',
  bio: '',
  name: '',
  oid:'',
  empid:'',
  role:'',
  gender:'',
  mobile:''
};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser: (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.profilePic = payload.profilePic;
      state.bio = payload.bio;
      state.name = payload.name;
      state.oid = payload.oid;
      state.empid = payload.empid;
      state.role = payload.role;
      state.gender = payload.gender;
      state.mobile = payload.mobile;

    },
 
    setUserNameAndBio: (state, { payload }) => {
      state.name = payload.name;
      state.bio = payload.bio;
      state.role = payload.role;
      state.gender = payload.gender;
      state.mobile = payload.mobile;
      state.oid = payload.oid;
      state.empid = payload.empid;
    },
  },
});
export const { setActiveUser, setUserNameAndBio } = activeUserSlice.actions;
export default activeUserSlice.reducer;
