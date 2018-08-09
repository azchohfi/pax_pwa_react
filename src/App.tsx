import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import logo from './logo.svg';

import './App.css';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Router>
            <Route exact={true} path="/" component={Home} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
