import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import bike from '../../../images/banner-bike.jpg'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}
const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item >
                <img
                    className="d-block w-100  img"
                    src={bike}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>EXPERIENCE THE NATURE'S BEAUTY</h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;