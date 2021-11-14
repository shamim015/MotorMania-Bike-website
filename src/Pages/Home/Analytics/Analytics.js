import React from 'react';
import './Analytics.css';

const Analytics = () => {
    return (
        <div className=" analytics">
            <div class="text-center text- p-5 container">
            </div>
            <div class="row  row-cols-md-3 row-cols-sm-3 g-4 ">
                <div class="col">
                    <h1>22+</h1>
                    <h5>Reviews</h5>
                </div>
                <div class="col">
                    <h1>84K</h1>
                    <h4>our sales</h4>
                </div>
                <div class="col">
                    <h1>88K</h1>
                    <h4>Happy Customers</h4>
                </div>
            </div>
        </div>
    );
};

export default Analytics;