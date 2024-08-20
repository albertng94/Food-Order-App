import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";

export default function CartItems() {

    let { items, updateCartItem, deleteCartItem } = useContext(CartContext);


    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <div className="cart-item">
                        <p>{`${item.name} - ${item.quantity} x $${(item.price*item.quantity).toFixed(2)}`}</p>
                        <div className="cart-item-actions">
                            <button  
                                onClick={item.quantity > 1 ? (() => updateCartItem({id: item.id, actionType: "-"})) : undefined}
                            >-</button>
                            <p>{item.quantity}</p>
                            <button 
                                onClick={() => updateCartItem({id: item.id, actionType: "+"})}    
                            >+</button>
                            <ion-icon 
                                name="trash-outline"
                                onClick={() => deleteCartItem(item.id)}
                            ></ion-icon>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}