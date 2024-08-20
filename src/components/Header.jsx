import logo from "../assets/logo.jpg";
import { useContext, useRef } from "react";
import { CartContext } from "../store/shopping-cart-context";
import Cart from "./Cart/Cart";
import CheckOutForm from "./Checkout Form/CheckOutForm";

export default function Header() {

    let { items } = useContext(CartContext);

    const totalItems = items.length;

    const cartDialog = useRef();
    const checkOutDialog = useRef();

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
            cartDialog.current.showModal();
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
            />
        </>        
    );
}