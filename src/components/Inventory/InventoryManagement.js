import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

        <Routes>
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/sell-item" element={<SellItemPage />} />
          <Route path="/remove-item" element={<RemoveItemPage />} />
          <Route path="/Main" element={<MainDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default InventoryManagement;
