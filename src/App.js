import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Route,Switch} from "react-router-dom"
import { Home } from './pages/home'
import { List } from "./pages/list"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/List" component={List}/>                 
        </Switch> 
      </Router>
      
    );
  }
}

export default App;
