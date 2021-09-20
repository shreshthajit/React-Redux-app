import {ActionTypes} from "../constant/action-types";
export const setProducts=(products)=>{
    return{
        type:Action.SET_PRODUCTS,
        payload:products,
    };
};


export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
};
