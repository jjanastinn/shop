import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './products/ProductList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ProductList} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;