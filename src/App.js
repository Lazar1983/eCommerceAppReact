import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Category from "./components/Category";
import State from "./components/State";
import Navbar from './components/Navbar';
import ItemsList from "./components/ItemsList";
import SingleItem from "./components/SingleItem";
import createItem from "./components/createItem";
import deleteItem from "./components/deleteItem";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemsList} />
        <Route path="/item/:id" component={SingleItem} />
        <Route path="/state" component={State} />
        <Route path="/category" component={Category} />
        <Route path="/createItem" component={createItem} />
        <Route path="/deleteItem" component={deleteItem} />
      </Switch>
    </React.Fragment>
  );
}

export default App;