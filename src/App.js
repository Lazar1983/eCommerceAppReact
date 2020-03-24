import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';

import Category from "./components/Category";
import State from "./components/State";
import Navbar from './components/Navbar';
import ItemsList from "./components/ItemsList";
import SingleItem from "./components/singleItem";
import CreateItem from "./components/createItem";
import DeleteItem from "./components/deleteItem";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemsList} />
          <Route path="/item/:id" component={SingleItem} />
          <Route path="/state" component={State} />
          <Route path="/category" component={Category} />
          <Route path="/createItem" component={CreateItem} />
          <Route path="/deleteItem" component={DeleteItem} />
        </Switch>
      </React.Fragment>
    </Provider>
  );
}

export default App;
