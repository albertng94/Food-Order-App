import logo from "./assets/logo.jpg"

function App() {
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="A burger logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="button text-button">Cart</button>
      </div>
    </>
  );
}

export default App;
