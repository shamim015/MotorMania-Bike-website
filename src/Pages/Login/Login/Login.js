import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    // const [loginData, setLoginData] = useState();
    // const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        // setLoginData(newLoginData);

    };

    // const handleLoginSubmit = (e) => {
    //     loginUser(loginData.email, loginData.password, location, history);
    //     e.preventDefault();
    // }
    // // const handleGoogleSignIn = () => {
    // //     signInWithGoogle(location, history);
    // // }

    return (
        <Container>

            <Typography variant="body1">Login</Typography>
            <form >
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
                    type="password"
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
                {/* {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>} */}
            </form>
            <p>---------</p>
            <Button variant="contained">Google Sign In</Button>


        </Container>
    );
};

export default Login;