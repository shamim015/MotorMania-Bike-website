import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div>
            <Container>
                <Typography variant="body1">Login</Typography>
                <form onSubmit={handleLoginSubmit} >
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-password-input"
                        label="Password"
                        type="Your password"
                        name="password"
                        onBlur={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                    />

                    <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >
                        Login
                    </Button>
                    <NavLink style={{ textDecoration: "none" }} to="/register">
                        <br />
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;