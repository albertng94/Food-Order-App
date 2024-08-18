import logo from "../assets/logo.jpg";
import { useContext, useRef } from "react";
import { CartContext } from "../store/shopping-cart-context";
import Cart from "./Cart";

export default function Header() {

    let { items } = useContext(CartContext);

    const totalItems = items.length;

    const cartDialog = useRef();

    function handleOpenCart() {
        cartDialog.current.showModal();
    }

    function handleCloseModal() {
        cartDialog.current.close();
    }

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
            <Cart ref={cartDialog} handleCloseModal={handleCloseModal} />
        </>        
    );
}