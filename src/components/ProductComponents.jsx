import React, { useEffect, useState } from 'react';
import ProductModel from '../model/Product';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const productsData = data.map(item => {
          return new ProductModel(
            item.id,
            item.title,
            item.price,
            item.category,
            item.description,
            item.image
          );
        });
        setProducts(productsData);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  }
  
  const filteredProducts = filterValue === "" ? products : 
    products.filter(product => {
      if (filterValue === "below15") {
        return parseFloat(product.price) < 15.00;
      } else if (filterValue === "above15") {
        return parseFloat(product.price) >= 15.00;
      }
      return true;
    });

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/4 px-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div>
            <h3 className="text-md font-semibold mb-2">Price</h3>
            <select value={filterValue} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="below15">Below $15.00</option>
              <option value="above15">Above $15.00</option>
            </select>
          </div>
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                <p className="text-gray-600 mb-2">Category: {product.category}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
