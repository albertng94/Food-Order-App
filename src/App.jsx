import logo from "./assets/logo.jpg"
import MealOffer from "./components/MealOffer.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Cart from "./components/Cart.jsx";

function App() {

  return (
    <CartContextProvider>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="A burger logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button" onClick={handleOpenCart}>Cart</button>
      </div>
      <MealOffer />
    </CartContextProvider>
  );
}

export default App;
