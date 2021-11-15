import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://powerful-ravine-22225.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-success  text">OUR PRODUCTS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products
                    .slice(0, 6)
                    .map(product =>
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