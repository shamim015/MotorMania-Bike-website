import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-success  text">OUR PRODUCTS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                    ></Product>
                )}
            </div>
        </div>
    );
};

export default Products;