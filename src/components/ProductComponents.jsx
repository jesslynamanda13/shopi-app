  
  import React, { useEffect, useState } from 'react';
  import ProductModel from '../model/Product';
  import axios from 'axios';

  const ProductsComponent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          const productsData = response.data.map(item => {
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
    }, []); // empty dependency array ensures the effect runs only once after the initial render

    return (
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {products.map(product => (
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
  
