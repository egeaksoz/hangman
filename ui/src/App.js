import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
