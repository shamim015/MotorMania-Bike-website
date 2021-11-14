import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const moreProduct = () => {
    const { _id, price, name, img, description } = product;
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
                    <div className="col ">
                        <div className="card h-100">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-text">{name}</h3>
                                <p>{description}</p>
                                <h5>$ {price} </h5>
                                <Link to={`/purchase/${_id}`}>
                                    <Button variant="success">Buy Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default moreProduct;