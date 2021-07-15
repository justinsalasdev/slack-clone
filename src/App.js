import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateChannel from "./components/CreateChannel";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/test" component={CreateChannel} />
          <Route>
            <Header path="/main" />
            <AppBody>
              <Sidebar />
              <Route>
                <Chat path="/chat" exact />
              </Route>
            </AppBody>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
