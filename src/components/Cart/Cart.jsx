import { useContext, forwardRef } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import CartItems from "./CartItems";


const Cart = forwardRef(function Cart({handleCloseModal, onCheckOut}, ref) {
    
    let { items, totalPrice } = useContext(CartContext);

    if (items.length === 0) {
        return <dialog className="modal" ref={ref}>
        <h2>Your Cart</h2>
        <p className="cart-item">Your cart is empty. Make sure to select your favourite meals first.</p>
        <div className="modal-actions cart-without-items">
            <button className="button" onClick={handleCloseModal}>Close</button>
        </div>
    </dialog>
    }

    return (
        <dialog className="modal cart" ref={ref}>
            <h2>Your Cart</h2>
            <CartItems />
            <p className="cart-total">{`$${totalPrice.toFixed(2)}`}</p>
            <div className="modal-actions">
                <button className="text-button" onClick={handleCloseModal}>Close</button>
                <button className="button" onClick={onCheckOut}>Go to checkout</button>
            </div>
        </dialog>
    );
});

export default Cart;