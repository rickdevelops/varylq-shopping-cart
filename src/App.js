import Header from "./Components/Header";
import Subheader from "./Components/Subheader";
import Footer from "./Components/Footer";
import "./App.css";
import BasicTable from "./Components/BasicTable";
import Cartcard from "./Components/Cartcard";

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
            {/* <Shopping /> */}
            <BasicTable />
          </div>
          <div className="shopping-content-right">
            {/* <Checkout /> */}
            <Cartcard />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
