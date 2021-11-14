import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Purchase = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);
    const { name, price } = product;
    console.log(product);
    const initalInfo = { customerName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initalInfo)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setPurchaseInfo(newInfo);

    }

    const handleOrderConfirm = e => {
        alert("Order successfully done!");
        const userProduct = {
            ...purchaseInfo,
            name: name,
            price: price
        }
        console.log(userProduct);
        // send to the server
        fetch("http://localhost:5000/userProducts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        e.preventDefault();
    }


    return (
        <Box>
            <Typography variant="h5">
                <img src={product.img} alt="" />
            </Typography>
            <Typography variant="h4">
                {product.name}
            </Typography>
            <Typography >
                {product.description}
            </Typography>
            <Typography variant="h5">
                ${product.price}
            </Typography>
            <from>
                <TextField
                    id="filled-basic"
                    sx={{ width: '30%', m: 1 }}
                    label="name"
                    name="customerName"
                    defaultValue={user.displayName}
                    onBlur={handleOnBlur}
                    variant="filled" />
                <br /><br />
                <TextField
                    id="filled-basic"
                    sx={{ width: '30%', m: 1 }}
                    label="email"
                    email="email"
                    onBlur={handleOnBlur}
                    variant="filled"
                    defaultValue={user.email}
                /><br /><br />

                <TextField
                    id="filled-basic"
                    sx={{ width: '30%', m: 1 }}
                    label="Address"
                    name="address"
                    variant="filled"
                    onBlur={handleOnBlur}
                /><br /><br />
                <TextField
                    id="filled-basic"
                    sx={{ width: '30%', m: 1 }}
                    label="Phone Number"
                    name="phone"
                    variant="filled"
                    onBlur={handleOnBlur}
                /><br /><br />

                <Button onClick={handleOrderConfirm} className="bg-success text-white" variant="success">Order Confirm</Button>
            </from>
        </Box>
    );
};

export default Purchase;