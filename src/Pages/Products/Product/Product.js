import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
    const { handleCart } = product;

    const { _id, price, name, img, description } = product;

    return (
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
    );
};

export default Product;