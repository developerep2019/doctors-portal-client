import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Dashboard from './components/DashBoard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard />
          </Route>
          <Route path="/patients">
            <AllPatients />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
