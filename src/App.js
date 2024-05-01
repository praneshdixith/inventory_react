import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryManagement from './components/Inventory/InventoryManagement';
import AddItemPage from './components/Inventory/AddItemPage';
import SellItemPage from './components/Inventory/SellItemPage';
import RemoveItemPage from './components/Inventory/RemoveItemPage';
import MainDetailPage from './components/Inventory/MainDetailPage';
import LoginForm from './components/LoginForm';
import Register from './components/Register';

function App() {
  const isLoggedIn = true; // Example: you would get this value from your authentication logic
  const [loginMessage, setLoginMessage] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<LoginForm />} /> */}
          <Route path="/login">
            <LoginForm setLoginMessage={setLoginMessage} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/inventory" element={isLoggedIn ? <InventoryManagement /> : <LoginForm />} />
          <Route path="/AddItem" element={isLoggedIn ? <AddItemPage /> : <LoginForm />} />
          <Route path="/SellItem" element={isLoggedIn ? <SellItemPage /> : <LoginForm />} />
          <Route path="/RemoveItem" element={isLoggedIn ? <RemoveItemPage /> : <LoginForm />} />
          <Route path="/MainDetail" element={isLoggedIn ? <MainDetailPage /> : <LoginForm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
