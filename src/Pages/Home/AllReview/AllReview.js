
import React, { useEffect, useState } from 'react';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/addReview")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-success  text">Review</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reviews
                    .map(reviews =>
                        <div className="col ">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-text">{reviews.name}</h3>
                                    <p>{reviews.descrip}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>

    );
};

export default AllReview;