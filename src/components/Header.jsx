import logo from "../assets/logo.jpg";
import { useContext, useRef } from "react";
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

    function handleOpenModal(id) {
        if (id === "cart") {
            cartDialog.current.showModal();
        } else if (id === "checkout") {
            checkOutDialog.current.showModal();
        }
    }

    function handleCloseModal(id) {
        if (id === "cart") {
            cartDialog.current.close();

        } else if (id === "checkout") {
            checkOutDialog.current.close();

        } else if (id === "orderSubmitted") {
            cartDialog.current.close();
            checkOutDialog.current.close();
            orderSubmittedDialog.current.showModal();
        
        } else if (id === "closeOrderSubmitted") {
            orderSubmittedDialog.current.close();
        }
    }

    return (
        <>
            <div id="main-header">
                <div id="title">
                    <img src={logo} alt="A burger logo" />
                    <h1>REACTFOOD</h1>
                </div>
                <button className="text-button" onClick={() => handleOpenModal("cart")}>
                    {(totalItems > 0) ? `Cart (${totalItems})` : "Cart"}
                </button>
            </div>
            <Cart 
                ref={cartDialog} 
                handleCloseModal={() => handleCloseModal("cart")}
                onCheckOut={() => handleOpenModal("checkout")} 
            />
            <CheckOutForm 
                ref={checkOutDialog}
                handleCloseModal={() => handleCloseModal("checkout")}
                orderSubmitted={() => handleCloseModal("orderSubmitted")} 
            />
            <OrderSubmitted 
                ref={orderSubmittedDialog}
                handleCloseModal={() => handleCloseModal("closeOrderSubmitted")}
            />
        </>        
    );
}