import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
});

export default function CartContextProvider() {

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });


    let cartCtx = {
        items: shoppingCart.items,
    };

    return <CartContext.Provider value={cartCtx}>
        {children}
    </CartContext.Provider>
}