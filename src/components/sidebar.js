import React from 'react'
import logo from '../images/Logo.png'
import home from '../images/home.png'
import customerIcon from '../images/customerIcon.png'
import arrow from '../images/arrow.png'
import chart from '../images/chart.png'
import correct from '../images/correctIcon.png'
import expenses from '../images/expensesIcon.png'
import fileIcon from '../images/fileIcon.png'
import suplierIcon from '../images/supliersIcon.png'
import personIcon from '../images/person.png' 
import { Link } from 'react-router-dom'
import '../css/sidebar.css'

export default function Sidebar() {

  return (
    <div className='sidebarContainer  bg-primary-grayishWhite p-5  w-30'>
      
      <div className="logo my-4 flex gap-3">
        <img src={logo} className='my-5'alt="" />
      </div>
      <div className=' flex flex-col gap-4 sidebarList'>
        <div>
          <ul className='flex flex-col gap-2'>
            <Link to='/'><li className='flex  gap-1 cursor-pointer hover:opacity-60'><img src={home} className='self-center' alt="" /> home</li></Link>
            <Link to='/'><li className='flex gap-1 cursor-pointer hover:opacity-60'><img src={customerIcon} className='self-center' alt="" /> customers</li></Link>
            <Link to='/suppliers'><li className='flex gap-1 cursor-pointer hover:opacity-60'><img src={suplierIcon} className='self-center' alt="" /> suppliers</li></Link>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2'>clearence
            <li className='flex  gap-1 mt-2'><img src={suplierIcon} className='self-center' alt="" /> estimates</li>
            <li className='flex gap-1'><img src={correct} className='self-center' alt="" /> jobs</li>
            <li className='flex gap-1'><img src={fileIcon} className='self-center' alt="" /> expensing</li>
            <li className='flex gap-1'><img src={suplierIcon} className='self-center' alt="" /> billing</li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2'>balance
            <li className='flex  gap-1 mt-2'><img src={chart} className='self-center' alt="" /> chart of accounts</li>
            <li className='flex gap-1'><img src={expenses} className='self-center' alt="" /> expenses</li>
            <li className='flex gap-1'><img src={chart} className='self-center' alt="" /> receipt</li>
            <li className='flex gap-1'><img src={expenses} className='self-center' alt="" /> journal entery</li>
            <li className='flex gap-1'><img src={expenses} className='self-center' alt="" /> write off</li>
            <li className='flex gap-1'><img src={fileIcon} className='self-center' alt="" /> fiscal closing</li>
            <div className='flex justify-between'>
              <li className='flex gap-1'><img src={fileIcon} className='self-center' alt="" /> reports</li>
              <img src={arrow} className='self-center' alt="" />
            </div>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2'> set up
            <div className='flex justify-between align-middle'>
              <li className='flex gap-1 mt-2'><img src={chart} className='self-center' alt="" />sethings</li>
              <img src={arrow} className='self-center' alt="" />
            </div>
            <li className='flex gap-1'><img src={personIcon} className='self-center' alt="" />users</li>
          </ul>
        </div>

      </div>
      
      
      
    </div>
  )
}
