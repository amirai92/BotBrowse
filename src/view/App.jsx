import React from "react";
import styled from "styled-components";
import Browse from "./BotBrowse";
import Create from "../content/Create";
import HomePage from "../content/Home";
import PageNotFound from "../content/PageNotFound";
import TopBar from "./TopBar";
import Links from "../content/Links";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Box>
      <TopBar>
        <Links />
      </TopBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/browse" component={Browse} />
        <Route path="/create" component={Create} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </Box>
  </Router>
);
export default App;

const Box = styled.div`
  /* background: lightskyblue; */
  padding: 3rem 7.5rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;
