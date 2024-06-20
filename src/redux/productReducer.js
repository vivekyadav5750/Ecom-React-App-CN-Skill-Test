import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { buildCreateApi } from '@reduxjs/toolkit/query';

const initialState = {
    products : [],
    loading : true
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://my-json-server.typicode.com/vivekyadav5750/dummyapi/products');
        return response.json();
    }
);

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addProduct : (state, action) => {
            console.log("action :: addProduct", action.payload);
            // state.products.push(action.payload);
            state.products = [...state.products, action.payload];
            console.log("state.products :: ", state.products);
        },
        deleteProduct : (state, action) => {
            console.log("action :: deleteProduct", action.payload);
            state.products = state.products.filter((product, index) => index !== action.payload);
            console.log("state.products :: ", state.products);
        },
        editProduct : (state, action) => {
            console.log("action :: editProduct", action.payload);
            state.products = state.products.map((product, index) => {
                if(index === action.payload.index){
                    return action.payload.product;
                }
                return product;
            });
            console.log("state.products :: ", state.products);
        }

    },
    extraReducers :(builder) => {
        // builder.addCase(fetchProducts.pending, (state, action) => {
        //     state.loading = true;
        // });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
            console.log(state.products);
        });
    }

});

export const productReducer = productSlice.reducer;
export const productSelector = (state) => state.products;



