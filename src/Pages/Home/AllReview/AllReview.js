
import React, { useEffect, useState } from 'react';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch("https://powerful-ravine-22225.herokuapp.com/AllReview")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 class="text-center  py-5">Happy <samp>Clients says</samp></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reviews
                    .map(reviews =>
                        <div className="col ">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-text">{reviews.name}</h5>
                                    <p>{reviews.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>

    );
};

export default AllReview;