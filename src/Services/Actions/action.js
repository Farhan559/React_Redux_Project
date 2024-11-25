import {Add_To_Cart} from '../constant';

export const addToCart = (itemData)=>{
    console.log('Actions:',itemData)
    return{
        type: Add_To_Cart ,
        data: itemData
    }
}