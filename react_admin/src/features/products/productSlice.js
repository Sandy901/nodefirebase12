import { createSlice ,createAsyncThunk, current} from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'
import { data } from '../../data'
const initialState = {
  loading: false,
  productList:[],
  error:null,

}

export const getProoductList = createAsyncThunk('product/getProoductList',()=>{
  return fetch('http://localhost:3050/products').then((response)=>response.json()).catch((error)=>error)
})


// export const deleteProoduct = createAsyncThunk('product/getProoductList',(id)=>{
//   return fetch(`https://fakestoreapi.com/products/${id}`, {
//     method:"DELETE"
//   }).then((response)=>response.json()).catch((error)=>error)
// })



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    fetchProductList:(state)=>{
      state.productList= data;
      state.loading=false
    },
    deleteProoduct: (state, action) => {
      const updatedList = state.productList.filter((product)=>{
        return product.id !==action.payload
      })

      state.productList= updatedList
    },
    addProduct: (state,action) =>{
      state.productList=state.productList.concat(action.payload)
    },
    updateProduct:(state,action)=>{
      const checkIndex = (order) => {
        return order.id === action.payload.id;
      };
      let requiredIndex= state.productList.findIndex(checkIndex);
      state.productList[requiredIndex].title=action.payload.title;
      state.productList[requiredIndex].description=action.payload.description;
      state.productList[requiredIndex].image=action.payload.image;
     
    }
  },
  extraReducers: {
    [getProoductList.pending]: (state) => {
      state.loading=true;
    },
    [getProoductList.fulfilled]:(state,action)=>{
      // let updatedData = action.payload.map((product)=>{
      //   return {
      //     id:product.id,
      //     title:product.title,
      //     description:product.description,
      //     image:product.image
      //   }
      // })
      state.loading= false;
      state.productList=action.payload.data;
      // state.productList=updatedData;
    },
    [getProoductList.rejected]:(state, action)=>{
      state.loading=false;
      state.error=action.payload
    },

    // [deleteProoduct.fulfilled]:(state, action)=>{
    //   const updatedList = state.productList.filter((product)=>{
    //     return product.id !==action.payload.id
    //   })
    //   state.loading=false;
    //   state.productList= updatedList
    // },
    


  }
})

// Action creators are generated for each case reducer function
export const { fetchProductList, deleteProoduct , addProduct, updateProduct} = productSlice.actions

export default productSlice.reducer