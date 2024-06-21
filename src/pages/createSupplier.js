import React from 'react'
import backArrow from '../images/Back icon.png'
import frame from '../images/Frame.png'
import Form from '../components/form'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import Sidebar from '../components/sidebar'


export default function CreateSupplier() {
  return (
    <div>
       <Header />
       <Sidebar />
        <div className="createContainer ">            
          <div className="flex py-3 px-5 border my-3 mx-1 justify-between">
            <h4 className='capitalize'>create supplier</h4>
            <div className='flex gap-4 justify-end'>
                <img className='self-center' src={frame} alt="" /> 
                <Link to='/suppliers' className='flex gap-3 hover:opacity-60'>
                   <img className='self-center' src={backArrow} alt="" />
                  <p className='capitalize self-center'>back to list</p>
                </Link>               
            </div>
          </div>

          {/* buttons */}
          <div className="buttons flex flex justify-end gap-4 mt-6">
            <button className='border-2 py-2 px-5 rounded hover:bg-primary-red hover:text-primary-white'>clear</button>
            <button className='border-2 py-2 px-5 rounded hover:bg-primary-red hover:text-primary-white'>create & new</button>
            <button className='border-2 py-2 border-0 px-5 rounded bg-primary-red text-primary-white hover:opacity-70'>create</button>
          </div>
          <Form />

          <div className="buttons flex flex justify-end gap-4 mt-6">
            <button className='border-2 py-2 px-5 rounded hover:bg-primary-red hover:text-primary-white'>clear</button>
            <button className='border-2 py-2 px-5 rounded hover:bg-primary-red hover:text-primary-white'>create & new</button>
            <button className='border-2 py-2 border-0 px-5 rounded bg-primary-red text-primary-white hover:opacity-70'>create</button>
          </div>
          <Footer />

        </div>
    </div>
  )
}
