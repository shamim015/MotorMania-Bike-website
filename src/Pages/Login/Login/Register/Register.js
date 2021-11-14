import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    // const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container container spacing={2}>
            <Typography variant="body1">Register</Typography>

            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-password-input"
                    label="Retype Your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    autoComplete="current-password"
                    variant="standard"
                />

                <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >
                    Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button variant="text">Already Registered? Please Login </Button>
                </NavLink>
            </form>
            }
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}

        </Container >
    );
};

export default Register;