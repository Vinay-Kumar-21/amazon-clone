export const initialState = {
    basket: [],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //logic for removing itm from basket

            //cloned basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                //if exists in basket, remove it
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in the basket`
                );
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;