    
    import React, { useState } from 'react';
    import axios from 'axios';

    const AddProducts = () => {
        const [formData, setFormData] = useState({});
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
            ...prevState,
            [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('https://fakestoreapi.com/products', formData);
                console.log('Product added successfully:', response.data);
                setFormData({
                    title: '',
                    price: '',
                    category: '',
                    description: '',
                    image: ''
                });
            } catch (error) {
                console.error('Error updating product:', error);
            }
        };

        return (
            <div className="bg-black min-h-screen flex justify-center items-center">
            <div className="bg-green-950 p-8 rounded-lg shadow-lg border border-green-500">
                <h2 className="text-green-500 text-2xl mb-4">Add Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="text-green-500">
                        Title:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="m-2 bg-green-800 rounded-md p-2" />
                    </label>
                    <br />
                    <label className="text-green-500">
                        Price:
                        <input type="text" name="price" value={formData.price} onChange={handleChange} className="m-2 bg-green-800 rounded-md p-2" />
                    </label>
                    <br />
                    <label className="text-green-500">
                        Category:
                        <input type="text" name="category" value={formData.category} onChange={handleChange} className="m-2 bg-green-800 rounded-md p-2" />
                    </label>
                    <br />
                    <label className="text-green-500 items-center">
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleChange} className="m-2 bg-green-800 rounded-md p-2" />
                    </label>
                    <br />
                    <label className="text-green-500">
                        Image URL:
                        <input type="text" name="image" value={formData.image} onChange={handleChange} className="m-2 bg-green-800 rounded-md p-2" />
                    </label>
                    <br />
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md">Add Product</button>
                </form>
            </div>
        </div>
        );
        };

    export default AddProducts;
 