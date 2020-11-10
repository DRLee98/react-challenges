/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Collection from "Routes/Collection";
import Season from "Routes/Season";
import Person from "Routes/Person";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search/:word" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
        <Route path="/collection/:id" component={Collection} />
        <Route path="/show/:id/season/:season" component={Season} />
        <Route path="/person/:id" exact component={Person} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
