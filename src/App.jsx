import React, { useState } from 'react';

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];  

const Product = ({ product }) => {
  return (
    <li className="product-item">
      {product.name} - {product.category} - ₹{product.price}
    </li>
  );
};

const App = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div>
      <h1>Product Search and Category Filter</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default App;