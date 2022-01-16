
import React from 'react';
import './App.css';
import Main from './Main';
import Apple from './Apple';
import Orange from './Orange';
import Banana from './Banana';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='topnav'>
        <Main />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Apple" component={Apple} />
          <Route path="/Orange" component={Orange} />
          <Route path="/Banana" component={Banana} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className='content'>
  <h1>Home Page</h1>
  </div>
);

export default App;
