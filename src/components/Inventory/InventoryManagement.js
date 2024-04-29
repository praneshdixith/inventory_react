import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddItemPage from './AddItemPage';
import SellItemPage from './SellItemPage';
import RemoveItemPage from './RemoveItemPage';
import MainDetailPage from './MainDetailPage';

function InventoryManagement() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Main">Main Details</Link>
            </li>
            <li>
              <Link to="/add-item">Add Item</Link>
            </li>
            <li>
              <Link to="/sell-item">Sell Item</Link>
            </li>
            <li>
              <Link to="/remove-item">Remove Item</Link>
            </li>
          </ul>
        </nav>

        
          <Route path="/add-item">
            <AddItemPage />
          </Route>
          <Route path="/sell-item">
            <SellItemPage />
          </Route>
          <Route path="/remove-item">
            <RemoveItemPage />
          </Route>
          <Route path="/Main">
            <MainDetailPage />
          </Route>
        
      </div>
    </Router>
  );
}

export default InventoryManagement;
