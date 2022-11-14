import { Link } from "react-router-dom";
import React, { useContext } from "react";

// Context that hold the cart state
import CartContext from "../Context/CartContext";

const Navbar = () => {
    let { cart } = useContext(CartContext);
    return (
        <>
            <nav className="fixed-top d-flex justify-content-between navbar p-2 navbar-dark bg-dark">
                <h1 className="navbar-brand">
                    <Link to="/" className="text-decoration-none">
                        {" "}
                        AYMVN SHOPPING
                    </Link>
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
