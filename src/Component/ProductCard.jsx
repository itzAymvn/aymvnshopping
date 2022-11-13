import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const ProductCard = ({ product }) => {
    let { addToCart } = useContext(CartContext);
    return (
        <div className="card col-md-12" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={product.image}
                style={{ width: "100%", height: "300px" }}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        addToCart(product);
                    }}>
                    Buy for ${product.price}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
