import {Add_To_Cart} from '../constant'
const initialState ={
    cardData : []
}

 const cardItems = (state = initialState,action) =>{
    switch(action.type){
        case Add_To_Cart:
          return {
                ...state,
                cardData: action.Data
            };
            default:
                return state

    }
}

export default cardItems;