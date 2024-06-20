import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Customers from './components/customers';



function App() {
 
  return (
    <div className="App">
     <Header />
     <Sidebar />
     <Customers/>
    </div>
  );
}

export default App;
