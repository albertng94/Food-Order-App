import logo from "./assets/logo.jpg"
import MealOffer from "./components/MealOffer.jsx";

function App() {
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="A burger logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button">Cart</button>
      </div>
      <MealOffer />
    </>
  );
}

export default App;
