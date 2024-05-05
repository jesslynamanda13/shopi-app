  
  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import Home from './pages/Home';
  import './index.css';
  import About from './pages/About';
import AddProducts from './components/AddProducts';
import DeleteProduct from './components/DeleteProducts';

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/delete-product" element={<DeleteProduct />} />
      </Routes>
    );
  }

  export default App;

