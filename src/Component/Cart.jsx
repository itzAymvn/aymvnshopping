import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
const Cart = () => {
    let { cart, setCart } = useContext(CartContext);

    // Sort cart by price
    cart.sort((a, b) => b.price - a.price);

    return cart.length > 0 ? (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered my-3">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td colSpan="2">
                                        $
                                        {cart.reduce(
                                            (total, item) =>
                                                total +
                                                item.price * item.quantity,
                                            0
                                        )}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            {/* button to clear localstorage place it to the right */}
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        <button
                            className="btn btn-danger float-right"
                            onClick={() => {
                                localStorage.clear();
                                setCart([]);
                            }}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Cart</h1>
                    <h3 className="text-center">Cart is empty</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
