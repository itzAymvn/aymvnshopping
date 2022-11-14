import React from "react";
import ProductCard from "./ProductCard";
import ProductList from "../Data/ProductList";

const RenderProducts = () => {
    return (
        <div className="row bg-dark d-flex p-3 mt-5 justify-content-center">
            {ProductList.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default RenderProducts;
