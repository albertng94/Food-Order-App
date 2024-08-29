import { forwardRef, useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import { storeUserOrder } from "../../data/http";
import Input from "./Input";

const CheckOutForm = forwardRef(function CheckOutForm({handleCloseModal, orderSubmitted}, ref) {
 
    let { items, totalPrice, clearCartItems } = useContext(CartContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userOrder = Object.fromEntries(formData.entries());

        try {
            await storeUserOrder(items, userOrder);
        } catch (error) {
            console.log(error.message);
            return;
        }

        orderSubmitted();
        clearCartItems();
    }
    
    return (
        <dialog className="modal" ref={ref}>
            <h2>Checkout</h2>
            <p>{`Total Amount: $${totalPrice}`}</p>
            <form onSubmit={handleSubmit}>
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
                        id="postal-code"
                    />
                    <Input 
                        label="City"
                        id="city"
                    />
                </div>
            
                <div className="modal-actions">
                    <button className="text-button" type="button" onClick={handleCloseModal}>Close</button>
                    <button className="button">Go to checkout</button>
                </div>
            </form>
        </dialog>

    );
});

export default CheckOutForm;