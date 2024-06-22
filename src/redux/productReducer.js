import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { buildCreateApi } from '@reduxjs/toolkit/query';
import CartAddProduct from '../components/addNewProduct';

const initialState = {
    products : [],
    loading : true,
    Carts : [],
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
            state.products = [...state.products, {...action.payload, id : state.products.length+1}];
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
                    return action.payload.updatedProduct;
                }
                return product;
            });
            console.log("state.products :: ", state.products);
        },
        addToCart : (state, action) => {
            const isProductInCart = state.Carts.find((cart) => cart.id === action.payload.id);
            // if there is already a product in cart then increase the quantity of that product by 1 else add the product to cart with quantity 1 
            if(isProductInCart){
                state.Carts = state.Carts.map((cart) => {
                    if(cart.id === action.payload.id){
                        return {...cart, quantity : cart.quantity + 1};
                    }
                    return cart;
                });
            }
            else{
                state.Carts = [...state.Carts, {...action.payload, quantity : 1}];
            }          

            console.log("state.Carts :: ", state.Carts);
        },  
        removeFromCart : (state, action) => {
            // state.Carts = state.Carts.filter((cart, index) => index !== action.payload);
            state.Carts = state.Carts.map((cart, index) => {
                if(index === action.payload){
                    return {...cart, quantity : cart.quantity - 1};
                }
                return cart;
            }).filter((cart) => cart.quantity > 0);
            console.log("state.Carts :: ", state.Carts);
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



