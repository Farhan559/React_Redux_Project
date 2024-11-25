import {Add_To_Cart} from '../Reducers/constant';

export const addToCart = (itemData)=>{
    return{
        type: Add_To_Cart ,
        data: itemData
    }
}