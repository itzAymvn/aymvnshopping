import React from "react";
import ProductCard from "./ProductCard";
import ProductList from "../Data/ProductList";

const RenderProducts = () => {
    return (
        <div className="row d-flex">
            {ProductList.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default RenderProducts;
