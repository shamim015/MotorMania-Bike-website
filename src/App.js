import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Login/Register/Register';
import Purchase from './Pages/Products/Purchase/Purchase';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import MoreProduct from './Pages/Products/MoreProduct/MoreProduct';
import NotFound from './Pages/Login/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <Route path="/moreProduct">
              <MoreProduct />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
