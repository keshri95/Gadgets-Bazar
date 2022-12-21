export const reducer = (state, action) => {

    switch(action.type){

        case "DISPLAY_ALL_PRODUCTS":
            return{
                ...state,
                products: action.payload.products,
                loading: false,
            }

        case "LOADING":
            return {
                ...state,
                loading: true,
            }

        case "NAVIGATE":
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
            


        
        default: return state;
        
    }

}