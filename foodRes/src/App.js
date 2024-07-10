import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Cart } from "./pages/Cart/Cart.js";
import { Food } from "./pages/Food/Food.js";
import { Home } from "./pages/Home/Home.js";
import { Login } from "./pages/Login/Login.js";
import { Register } from "./pages/Register/Register.js";
// import Order from "./pages/Order/Order.js";
// import OrderTrack from "./pages/OrderTack/OrderTrack.js";
// import Payment from "./pages/Payment/Payment.js";
// import Profile from "./pages/Profile/Profile.js";
// import CheckOut from "./pages/CheckOut/CheckOut.js";
// import DashBoard from "./pages/DashBoard/DashBoard.js";

import { Header } from "./components/Header/Header.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Home />} />
          <Route path="/tag/:tag" element={<Home />} />
          <Route path="/food/:id" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
