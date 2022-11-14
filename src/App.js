import "./App.css";

// Importing react and react router dom
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// importing Bootstrap CSS and Icons
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Context to store the cart
import CartContext from "./Context/CartContext";

// Components
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import RenderProducts from "./Component/RenderProducts";

const App = () => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    ); // Cart state

    // Function to add to cart
    const addToCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id); // Check if the product is already in the cart
        if (productInCart) {
            // If the product is already in the cart
            productInCart.quantity++; // Increase the quantity
            setCart([...cart]); // Update the cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
        } else {
            // If the product is not in the cart
            setCart([...cart, { ...product, quantity: 1 }]); // Add the product to the cart with a quantity of 1
            localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
        }
    };

    // Function to increase the quantity of a product in the cart
    const increaseQuantity = (product) => {
        const productInCart = cart.find((item) => item.id === product.id); // Find the product in the cart
        productInCart.quantity++; // Increase the quantity
        setCart([...cart]); // Update the cart
        localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
    };

    // Function to decrease the quantity of a product in the cart
    const decreaseQuantity = (product) => {
        const productInCart = cart.find((item) => item.id === product.id); // Find the product in the cart
        if (productInCart.quantity > 1) {
            // If the quantity is greater than 1
            productInCart.quantity--; // Decrease the quantity
            setCart([...cart]); // Update the cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
        } else {
            // If the quantity is 1
            setCart(cart.filter((item) => item.id !== product.id)); // Remove the product from the cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id)); // Remove the product from the cart
        localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in the local storage
    };

    return (
        <>
            {/* Wrap the app in the context provider */}
            <CartContext.Provider
                value={{
                    cart,
                    setCart,
                    addToCart,
                    increaseQuantity,
                    decreaseQuantity,
                    removeFromCart,
                }}>
                <Navbar />
                <Routes>
                    {/* Add the cart route */}
                    <Route path="/cart" exact element={<Cart />} />

                    {/* Add the products route */}
                    <Route path="/" exact element={<RenderProducts />} />
                </Routes>
            </CartContext.Provider>
        </>
    );
};

export default App;
