import logo from "./assets/logo.jpg"
import MealOffer from "./components/MealOffer.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="A burger logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button">Cart</button>
      </div>
      <MealOffer />
    </CartContextProvider>
  );
}

export default App;
