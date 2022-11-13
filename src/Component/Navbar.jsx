
import { Link } from "react-router-dom";
import React, { useContext } from "react";

// Context that hold the cart state
import CartContext from "../Context/CartContext";

const Navbar = () => {
    let { cart } = useContext(CartContext);
    return (
        <>
            <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-dark bg-dark px-2">
                <h1 className="navbar-brand">
                    <Link to="/"> AYMVN SHOPPING</Link>
                </h1>
                <Link to="/cart" className="btn btn-primary">
                    <i className="bi bi-bag-plus mx-1"></i>
                    <span className="badge bg-danger">{cart.length}</span>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
