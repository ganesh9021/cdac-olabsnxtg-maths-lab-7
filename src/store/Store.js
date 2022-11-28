import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        
        lang:"en",
        
    },
    reducers:{
       
        setLangStore: (state,action)=>
        {
           state.lang =action.payload;
        },
    },
});

export const {setLangStore} = firstSlice.actions;



//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer}
});