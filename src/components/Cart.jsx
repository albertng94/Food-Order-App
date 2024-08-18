import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function calculateTotalPrice(itemsArr) {
    let totalPrice = 0;
    itemsArr.forEach(element => {
        totalPrice += (element.quantity * element.price);
    });
    return totalPrice;
}

export default function Cart() {
    
    let { items } = useContext(CartContext);

    let totalPrice = calculateTotalPrice(items);
    console.log(totalPrice);

    return (
        <dialog className="modal">
            <h2>Your Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <div className="cart-item">
                            <p>{`${item.name} - ${item.quantity} x $${Number(item.price)*Number(item.quantity)}`}</p>
                            <div className="cart-item-actions">
                                <button>-</button>
                                <p>{item.quantity}</p>
                                <button>+</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="cart-total">{`$${totalPrice}`}</p>
            <div>
                <button>Close</button>
                <button className="button">Go to checkout</button>
            </div>
        </dialog>
    );
}