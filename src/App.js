import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import "./App.css";

function App() {
  const [profile, setProfile] = useState();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login profile={profile} setProfile={setProfile} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard profile={profile} setProfile={setProfile} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
