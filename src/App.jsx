import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Product from "./components/Product";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/:id" element={<Product></Product>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
