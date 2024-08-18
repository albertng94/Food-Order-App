import { useContext, forwardRef } from "react";
import { CartContext } from "../store/shopping-cart-context";

function calculateTotalPrice(itemsArr) {
    let totalPrice = 0;
    itemsArr.forEach(element => {
        totalPrice += (element.quantity * element.price);
    });
    return totalPrice;
}

const Cart = forwardRef(function Cart({handleCloseModal}, ref) {
    
    let { items } = useContext(CartContext);

    let totalPrice = calculateTotalPrice(items);
    console.log(totalPrice);

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
        <dialog className="modal" ref={ref}>
            <h2>Your Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <div className="cart-item">
                            <p>{`${item.name} - ${item.quantity} x $${(item.price*item.quantity).toFixed(2)}`}</p>
                            <div className="cart-item-actions">
                                <button>-</button>
                                <p>{item.quantity}</p>
                                <button>+</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="cart-total">{`$${totalPrice.toFixed(2)}`}</p>
            <div className="modal-actions">
                <button className="text-button" onClick={handleCloseModal}>Close</button>
                <button className="button">Go to checkout</button>
            </div>
        </dialog>
    );
});

export default Cart;