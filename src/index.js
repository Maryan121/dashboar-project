import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Customers from './components/customers';
import CreateCustomer from './pages/createCustomer';
import Suppliers from './pages/supplier';
import CreateSupplier from './pages/createSupplier';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const MyRouter  = createBrowserRouter([
  {path:'/',element: <App />},
  {path: '/customers', element:<Customers />},
  {path:'/supplier',element:<Suppliers />},
  {path:'/createCustomer',element:<CreateCustomer />},
  {path:'/createSupplier',element:<CreateSupplier />}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={MyRouter} />
   </React.StrictMode>
);
