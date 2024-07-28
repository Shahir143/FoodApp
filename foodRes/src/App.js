import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.js";
import Food from "./pages/Food/Food.js";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import { Register } from "./pages/Register/Register.js";
import Order from "./pages/Order/Order.js";
import OrderTrack from "./pages/OrderTrack/OrderTrack.js";
import Payment from "./pages/Payment/Payment.js";
import Profile from "./pages/Profile/Profile.js";
import CheckOut from "./pages/CheckOut/CheckOut.js";
import DashBoard from "./pages/DashBoard/DashBoard.js";
import AuthRoute from "./components/AuthRoute/AuthRoute.js";

import Header from "./components/Header/Header.js";
import Loading from "./components/Loading/Loading.js";
import { useLoading } from "./hooks/useLoading.js";
import { setLoadingInterceptor } from "./Interceptor/loadingInterceptor.js";

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  });

  return (
    <div className="App">
      <Loading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Home />} />
        <Route path="/tag/:tag" element={<Home />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              <CheckOut />
            </AuthRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <AuthRoute>
              <Payment />
            </AuthRoute>
          }
        />
        <Route
          path="/track/:orderId"
          element={
            <AuthRoute>
              <OrderTrack />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route
          path="/orders/:filter?"
          element={
            <AuthRoute>
              <Order />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <DashBoard />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
