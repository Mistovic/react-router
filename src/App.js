
import React from 'react';
import Nav from './Nav';
import About from './components/About';
import Shop from './components/Shop';
import Item from './components/Item';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {

  // Wrapujemo komponente koje zelimo da routujemo 
  // Switch nam puni div samo sa tom komponentom koju pozovemo
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/about" component={About} />
          <Route path="/components/shop" exact component={Shop} />
          <Route path="/components/shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}




export default App;
