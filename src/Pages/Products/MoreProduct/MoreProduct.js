
import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MoreProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://secret-brushlands-33023.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-success  text">OUR PRODUCTS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products
                    .map(product =>
                        <div className="col ">
                            <div className="card h-100">
                                <img src={products.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">{products.name}</h3>
                                    <p>{products.description}</p>
                                    <h5>$ {products.price} </h5>
                                    <Link to={`/purchase/${products._id}`}>
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

export default MoreProduct;