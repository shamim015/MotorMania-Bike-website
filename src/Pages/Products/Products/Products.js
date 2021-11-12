import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://spooky-web-52555.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-success  text">POPULAR PACKAGES</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service =>
                    <Service
                        key={service.id}
                        service={service}
                    ></Service>
                )}
            </div>
        </div>
    );
};

export default Products;