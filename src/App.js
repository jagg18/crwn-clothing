import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router';

import HomePage from './pages/homepage/homepage.component';

function App() {
  const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )

  return <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>;
}

export default App;
