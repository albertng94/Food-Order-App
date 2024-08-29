import { forwardRef } from "react";

const OrderSubmitted = forwardRef(function OrderSubmited({handleCloseModal}, ref) {
    return (
        <dialog className="modal" ref={ref}>
            <h2>Success!</h2>
            <p className="cart-item">Your order was submitted successfully.</p>
            <p className="cart-item">We will get back to you with more details via email within the next few minutes.</p>
            <div className="modal-actions">
                <button className="button simple-modal-button" onClick={handleCloseModal}>Okay</button>
            </div>
        </dialog>
    );
});

export default OrderSubmitted;