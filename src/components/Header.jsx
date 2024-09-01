import logo from "../assets/logo.jpg";
import { useContext, useRef, useCallback } from "react";
import { CartContext } from "../store/shopping-cart-context";
import Cart from "./Cart/Cart";
import CheckOutForm from "./Checkout Form/CheckOutForm";
import OrderSubmitted from "./OrderSubmitted";

export default function Header() {

    let { items } = useContext(CartContext);

    const totalItems = items.length;

    const cartDialog = useRef();
    const checkOutDialog = useRef();
    const orderSubmittedDialog = useRef();

    const handleOpenModal = useCallback(function handleOpenModal(id) {
        if (id === "cart") {
            cartDialog.current.showModal();
        } else if (id === "checkout") {
            cartDialog.current.close();
            checkOutDialog.current.showModal();
        } else if (id === "orderSubmitted") {
            checkOutDialog.current.close();
            orderSubmittedDialog.current.showModal();
        }
    }, [cartDialog, checkOutDialog, orderSubmittedDialog]);

    const handleCloseModal = useCallback(function handleCloseModal(id) {
        if (id === "cart") {
            cartDialog.current.close();

        } else if (id === "checkout") {
            checkOutDialog.current.close();
            cartDialog.current.showModal();

        } else if (id === "orderSubmitted") {
            orderSubmittedDialog.current.close();
        }
    }, [cartDialog, checkOutDialog, orderSubmittedDialog]);

    const handleCloseCheckout = useCallback(() => handleCloseModal("checkout"), [handleCloseModal]);
    const handleCloseCart = useCallback(() => handleCloseModal("cart"), [handleCloseModal]);
    const handleCloseOrderSubmitted = useCallback(() => handleCloseModal("orderSubmitted"), [handleCloseModal]);

    const handleOpenCart = useCallback(() => handleOpenModal("cart"), [handleOpenModal]);
    const handleOpenCheckout = useCallback(() => handleOpenModal("checkout"), [handleOpenModal])
    const handleOpenOrderSubmitted = useCallback(() => handleOpenModal("orderSubmitted"), [handleOpenModal]);

    return (
        <>
            <div id="main-header">
                <div id="title">
                    <img src={logo} alt="A burger logo" />
                    <h1>REACTFOOD</h1>
                </div>
                <button className="text-button" onClick={handleOpenCart}>
                    {(totalItems > 0) ? `Cart (${totalItems})` : "Cart"}
                </button>
            </div>
            <Cart 
                ref={cartDialog} 
                handleCloseModal={handleCloseCart}
                onCheckOut={handleOpenCheckout} 
            />
            <CheckOutForm 
                ref={checkOutDialog}
                handleCloseModal={handleCloseCheckout}
                orderSubmitted={handleOpenOrderSubmitted} 
            />
            <OrderSubmitted 
                ref={orderSubmittedDialog}
                handleCloseModal={handleCloseOrderSubmitted}
            />
        </>        
    );
}