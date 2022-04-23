import Header from "./Components/Header";
import Subheader from "./Components/Subheader";
import Shopping from "./Components/Shopping";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Subheader />
      {/* Shopping */}

      <div className="shopping-section">
        <h1> Shopping Cart</h1>
        <div className="shopping-content">
          <div className="shopping-content-left">
            <Shopping />
          </div>
          <div className="shopping-content-right">
            <Checkout />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
