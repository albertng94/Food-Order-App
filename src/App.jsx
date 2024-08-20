import Header from "./components/Header.jsx";
import MealOffer from "./components/MealOffer.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

  return (
    <CartContextProvider>
      <Header />
      <MealOffer />
    </CartContextProvider>
  );
}

export default App;
