import { forwardRef, useContext, useState } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import { storeUserOrder } from "../../data/http";
import Input from "./Input";
import Error from "../Error";

const CheckOutForm = forwardRef(function CheckOutForm({handleCloseModal, orderSubmitted}, ref) {
 
    let { items, totalPrice, clearCartItems } = useContext(CartContext);

    const [error, setError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userOrder = Object.fromEntries(formData.entries());

        try {
            await storeUserOrder(items, userOrder);
        } catch (error) {
            setError({
                message: error.message || "Unable to process your order. Please try again later..."
            });
            return;
        }

        orderSubmitted();
        clearCartItems();
    }

    function handleErrorModal() {
        setError(false);
    }

    if (error) {
        return <Error
            title={"An unexpected error occurred!"}
            message={error.message}
            onConfirm={handleErrorModal}
        />
    }
    
    return (
        <dialog className="modal" ref={ref}>
            <h2>Checkout</h2>
            <p>{`Total Amount: $${totalPrice}`}</p>
            <form onSubmit={handleSubmit}>
                <Input 
                    label="Full Name"
                    id="name"
                    pattern="^[a-zA-ZñÑ\s]+$"
                    title="Only letters allowed"
                    required
                />
                <Input
                    label="E-Mail Address"
                    id="email"
                    type="email"
                    required
                />
                <Input 
                    label="Street"
                    id="street"
                    required
                />
                <div className="control-row">
                    <Input 
                        label="Postal Code"
                        id="postal-code"
                        required
                    />
                    <Input 
                        label="City"
                        id="city"
                        pattern="^[a-zA-ZñÑ\s]+$"
                        title="Only letters allowed"
                        required
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