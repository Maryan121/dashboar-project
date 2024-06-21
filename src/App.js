import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Customers from './components/customers';
import Suppliers from './pages/supplier';
import CreateCustomer from './pages/createCustomer';
import CreateSupplier from './pages/createSupplier';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Customers/>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/CreateCustomer" element={<CreateCustomer />} />
          <Route path="/CreateSupplier" element={<CreateSupplier />} />
          <Route path="*" element={<div>page 404 not found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
