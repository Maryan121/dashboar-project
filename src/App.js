import './App.css';
import './App.css';
import Customers from './components/customers';
import CreateCustomer from './pages/createCustomer';
import Suppliers from './pages/supplier';
import CreateSupplier from './pages/createSupplier';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
 
  return (
    
      <Router>
        <div className='App'>
        <Routes> 
          <Route path='/'  element={<Customers />} />
          <Route path="/supplier" element={<Suppliers />} />
          <Route path="/createCustomer" element={<CreateCustomer />} />
          <Route path="/createSupplier" element={<CreateSupplier />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
