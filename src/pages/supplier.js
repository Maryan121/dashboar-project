import React from 'react'
import '../css/suppliers.css'
import '../css/sidebar.css'
import '../css/header.css'
import frame from '../images/Frame.png'
import vector from '../images/Vector.png'
import newIcon from '../images/newIcon.png'
import arrows from '../images/arrows.png'
import filter from '../images/filterIcon.png'
import columnFilter from '../images/ColumnFilterIcon.png'
import data from '../components/data/data'
import left from '../images/Left.png'
import right from '../images/Right.png'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'


export default function Suppliers() {
  return (
    <>
    <div className='container suppliersContainer'>  
        <div className='flex justify-around my-3  uppercase nav'>
            <Link to='/' className=' hover:text-primary-red'>costomers</Link>
            <Link to='/suppliers' className='font-medium hover:text-primary-red'>suppliers</Link>
        </div>    
      <div className="titleSec flex justify-between  p-2 border my-3 mx-1">
        <h2 className='capitalize font-medium'></h2>
        <div className='flex gap-4'>
            <img className='self-center' src={frame} alt="" />
            <img className='self-center' src={vector} alt="" />
            <Link to='/createSupplier' className='flex gap-1 self-center'>
                <img src={newIcon} className='self-center' alt="" />
                <p className='headerTite'>new activity</p>
            </Link>
        </div>
      </div>
      <div className='flex flex-col gap-3 p-1'>
        <div className='flex gap-4 justify-between mt-2'>
            <div className='flex self-center bg-primary-grayishWhite py-1 px-5 rounded'>
              <img className='self-center' src={filter} alt="filterIcon" />
              <span>filter</span>
            </div>
            <div className='flex self-center bg-primary-grayishWhite py-1 px-5 rounded'>
              <img className='self-center' src={columnFilter} alt="columnFilter" />
              <span>columns</span>
            </div>
        </div>
        <table className='text-sm table-fixed p-3'>
            <thead className='bg-primary-grayishWhite'>
                <tr className=' rounded-md'>
                    <th className='uppercase p-3 hide'>id</th>
                    <th className='uppercase'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />name
                        </div>
                    </th>
                    <th className='uppercase hide'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />mobile
                        </div>
                    </th>
                    <th className='uppercase hide'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />last activity
                        </div>
                    </th>
                    <th className='uppercase'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />balance
                        </div>
                    </th>
                    <th className='uppercase  hide'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />created at
                        </div>
                    </th>
                    <th className='uppercase'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />open balance
                        </div>
                    </th>
                    <th className='uppercase'>
                        <div className='flex gap-2 items-center  hide'>
                            <img className='w-3' src={arrows} alt="Sort" />credit limit
                        </div>
                    </th>
                    <th className='uppercase status'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-3' src={arrows} alt="Sort" />status
                        </div>
                    </th>
                </tr>
            </thead>
            
                {
                    data.map((customer)=>{
                        return(
                            <tbody className='my-4 border'  key={customer.id}>
                            <tr className='capitalize tbrow'>
                                <td className='ml-3 py-4 px-2 hide'>{customer.customerId}</td>
                                <td className='mx-2'>{customer.name}</td>
                                <td className='hide '>{customer.mobile}</td>
                                <td className=' hide'>{customer.lastActivity}</td>
                                <td className='pl-5'>${customer.balance}</td>
                                <td className='hide'>{customer.createdAt}</td>
                                <td className='pl-8'>${customer.openBalance}</td>
                                <td className='pl-5  hide'>${customer.creditLimit}</td>
                                <td className='active pl-6'><span className='bg-primary-lightGreen text-primary-darkGreen font-bold rounded py-1 px-4'>{customer.status}</span></td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            
        </table>
                
      </div>

      <div className='flex justify-end mt-5 '>
            <img src={left} className='self-center hover:opacity-80 cursor-pointer' alt="" />
            <div className='bg-primary-grayishWhite  flex px-1  gap-5 rounded'>
                <Link to='/' className='hover:bg-primary-red hover:text-primary-white py-1 px-3'>1</Link>
                <Link to='/createCustomer' className='py-1 px-3 hover:bg-primary-red hover:text-primary-white'>2</Link>
                <Link to='/suppliers' className='py-1 px-3 bg-primary-red text-primary-white'>3</Link>
                <Link to='/createSupplier' className='py-1 px-3 hover:bg-primary-red hover:text-primary-white'>4</Link>
            </div>
            <img src={right} className='self-center hover:opacity-80 cursor-pointer' alt="" />
        </div>
     <Footer />
    </div>
    </>
  )
}
