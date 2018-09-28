import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Route,Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import { Home } from './pages/home'
import { List } from "./pages/list"
import Typelist  from '../src/pages/typelist'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/List" exact component={List}/>  
            <Route path="/typelist" exact component={Typelist} />               
        </Switch> 
      </Router>
      </Provider>
    );
  }
}

export default App;
