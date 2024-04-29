import React, { useState } from 'react';

function AddItemPage() {
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    // Add logic to add item to inventory
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AddItemPage;
