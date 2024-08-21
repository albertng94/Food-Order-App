import { forwardRef, useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import Input from "./Input";

const CheckOutForm = forwardRef(function CheckOutForm({handleCloseModal}, ref) {
 
    let { totalPrice } = useContext(CartContext);
    
    return (
        <dialog className="modal" ref={ref}>
            <h2>Checkout</h2>
            <p>{`Total Amount: $${totalPrice}`}</p>
            <Input 
                label="Full Name"
                id="name"
            />
            <Input
                label="E-Mail Address"
                id="email"
                type="email"
            />
            <Input 
                label="Street"
                id="street"
            />
            <div className="control-row">
                <Input 
                    label="Postal Code"
                    id="Postal-code"
                />
                <Input 
                    label="City"
                    id="city"
                />
            </div>
            <div className="modal-actions">
                <button className="text-button" onClick={handleCloseModal}>Close</button>
                <button className="button">Go to checkout</button>
            </div>
        </dialog>

    );
});

export default CheckOutForm;