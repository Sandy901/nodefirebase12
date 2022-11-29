import { createSlice ,createAsyncThunk, current} from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'
import { data } from '../../data'
const initialState = {
  loading: false,
  users:[],
  loggedInUser:{},
  error:null,

}

export const getUsersList = createAsyncThunk('product/getProoductList',()=>{
  return fetch('http://localhost:3050/products').then((response)=>response.json()).catch((error)=>error)
})


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loginUser:(state , action)=>{
      state.loggedInUser= action.payload;
      state.loading=false
    },
  },
  extraReducers: {
    [getUsersList.pending]: (state) => {
      state.loading=true;
    },
    [getUsersList.fulfilled]:(state,action)=>{
      state.loading= false;
      state.users=action.payload.data;
    },
    [getUsersList.rejected]:(state, action)=>{
      state.loading=false;
      state.error=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { loginUser} = userSlice.actions

export default userSlice.reducer