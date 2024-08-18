import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {

    let { items } = useContext(CartContext);

    const totalItems = items.length;

    return (
        <div id="main-header">
        <div id="title">
          <img src={logo} alt="A burger logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button">
            {(totalItems > 0) ? `Cart (${totalItems})` : "Cart"}
        </button>
      </div>
    );
}