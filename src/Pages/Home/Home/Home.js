import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Analytics from '../Analytics/Analytics';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Analytics></Analytics>
            <Footer></Footer>
        </div>
    );
};

export default Home;