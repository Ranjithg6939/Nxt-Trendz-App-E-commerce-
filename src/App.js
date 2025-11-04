import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductItemDetails from "./components/ProductItemDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CartContext from "./context/CartContext";

import "./App.css";

class App extends Component {
  state = { cartList: [] };

  addCartItem = (product) => {
    const { cartList } = this.state;
    const productExists = cartList.find((item) => item.id === product.id);

    if (productExists) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        ),
      }));
    } else {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    }
  };

  removeCartItem = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter((item) => item.id !== id),
    }));
  };

  incrementCartItemQuantity = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  decrementCartItemQuantity = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    }));
  };

  removeAllCartItems = () => {
    this.setState({ cartList: [] });
  };

  render() {
    const { cartList } = this.state;

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute>
                  <ProductItemDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
