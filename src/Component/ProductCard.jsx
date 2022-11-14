import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const ProductCard = ({ product }) => {
    let { addToCart } = useContext(CartContext);
    return (
        <div className="card m-2 col-md-12" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                style={{ height: "250px" }}
                src={product.image}
                alt={product.name}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title font-weight-bold">{product.name}</h5>
                <p className="card-text">{product.describe}</p>
                <button
                    className="btn mt-auto btn-primary"
                    onClick={() => {
                        addToCart(product);
                    }}>
                    Buy for{" "}
                    <span className="badge bg-light text-dark">
                        {" "}
                        ${product.price}
                    </span>{" "}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
