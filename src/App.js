import React, { Component,Fragment } from 'react';
import { Home } from './pages/home'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Typelist  from '../src/pages/typelist'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path='/' exact component={Home}/>
            <Route path="/typelist" component={Typelist} />
          </Fragment>
        </Router>
      </Provider>  
    );
  }
}

export default App;
