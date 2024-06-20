import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Suppliers from './pages/supplier';
import CreateCustomer from './pages/createCustomer';
import CreateSupplier from './pages/createSupplier';
import Customers from './components/customers';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const basename = process.env.NODE_ENV === 'production' ? '/dashboard-project' : '/';



const myRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/suppliers',
    element: <Suppliers />
  },
  {
    path:'/createCustomer',
    element:<CreateCustomer />
  },
  {
    path:'/createSupplier',
    element:<CreateSupplier />
  },
  { basename }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
