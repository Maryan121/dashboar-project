import './App.css';
import './App.css';
import Customers from './components/customers';
import Suppliers from './pages/supplier';
import CreateCustomer from './pages/createCustomer';
import CreateSupplier from './pages/createSupplier';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 
  return (
    <div className='App'>
      <Router>
     
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/CreateCustomer" element={<CreateCustomer />} />
          <Route path="/CreateSupplier" element={<CreateSupplier />} />
          <Route path="*" element={<div>page 404 not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
