    
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const DeleteProduct = () => {
        const [products, setProducts] = useState([]);
        const [selectedProduct, setSelectedProduct] = useState('');
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://fakestoreapi.com/products');
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };
            fetchData();
        }, []);

        const handleProductSelect = (e) => {
            setSelectedProduct(e.target.value);
        };

        const handleDelete = async () => {
            try {
                const response = await axios.delete(`https://fakestoreapi.com/products/${selectedProduct}`);
                console.log('Product deleted successfully:', response.data);
                // You can update the products list here if necessary
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        };

        return (
            <div className="bg-black min-h-screen flex justify-center items-center">
                <div className="bg-green-950 p-8 rounded-lg shadow-lg">
                    <h2 className="text-green-500 text-2xl mb-4">Delete Product</h2>
                    <div className="flex items-center mb-4">
                        <label className="text-green-500 mr-4">Select Product:</label>
                        <select value={selectedProduct} onChange={handleProductSelect} className="bg-gray-400 rounded-md p-2">
                            <option value="">Select a product...</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.title}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded-md">Delete Product</button>
                </div>
            </div>
        );
    };

    export default DeleteProduct;
    
