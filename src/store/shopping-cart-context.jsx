import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
});

function shoppingCartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
        );
    
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;

        return {
            items: updatedItems
        };

        } else {
            updatedItems.push({
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              quantity: 1,
            });

            return {
                items: updatedItems
            };
        }

    } else if (action.type === "UPDATE_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
        );
    
        const existingCartItem = updatedItems[existingCartItemIndex];
 
        if (action.payload.actionType === "+") {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;

        } else if (action.payload.actionType === "-") {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        

        return {
            items: updatedItems
        };

    } else if (action.type === "DELETE_ITEM") {
        const updatedItems = [...state.items].filter((item) => {
            return item.id !== action.payload;
        });

        return {
            items: updatedItems
        }
    }

    return state;
}


export default function CartContextProvider({children}) {

    const [shoppingCart, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {items: []}
    );

    function handleAddItemToCart({id, name, price}) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: {
                id,
                name,
                price
            }
        });
    }

    function handleUpdateCartItem({id, actionType}) {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
                id,
                actionType
            }
        });
    }

    function handleDeleteCartItem(id) {
        console.log(id);
        shoppingCartDispatch({
            type: "DELETE_ITEM",
            payload: id
        })
    }

    console.log(shoppingCart.items);;

    let cartCtx = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateCartItem: handleUpdateCartItem,
        deleteCartItem: handleDeleteCartItem
    };

    return <CartContext.Provider value={cartCtx}>
        {children}
    </CartContext.Provider>
}