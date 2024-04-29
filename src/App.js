import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import InventoryManagement from './components/Inventory/InventoryManagement';
import MainDetailPage from './components/Inventory/MainDetailPage';
import LoginForm from './components/LoginForm';
import welcome from './components/welcome';

function App() {
  const isLoggedIn = false; // Example: you would get this value from your authentication logic

  return (
    <div>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/inventory" element={isLoggedIn ? <welcome /> : <welcome />} />
        {/* Add other routes here */}
        </div>
      );
}

export default App;

