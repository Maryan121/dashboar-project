import React from 'react'
import newIcon from '../images/newIcon.png'
import flag from '../images/somaliflag.png'
import searchIcon from '../images/searchIcon.png'
import notification from '../images/Notification.png'
import active from '../images/status.png'
import '../css/header.css'
import { Link } from 'react-router-dom'


export default function Header(props) {
  
  return (
    <header className='p-2 header flex justify-between'>
      
      <Link to='/createCustomer'>
        <div className='flex gap-1 self-center'>
          <img src={newIcon} className='self-center' alt="" />
          <p className='headerTite'>new activity</p>
        </div>
      </Link>
      <div className='flex gap-4 headerRightItems'>
        <div className="flag flex gap-1">
          <img src={flag} className='self-center rounded' alt="" /> <span className='self-center text-sm'>somali</span>
        </div>
        <img className='self-center cursor-pointer' src={searchIcon} alt="" />
        <img className='self-center cursor-pointer' src={notification} alt="" />
        <div className='admin flex gap-2'>
          <div className='flex flex-col'>
            <p className='text-sm'>abdi farah</p>
            <p className='text-primary-gray text-sm admintext self-end'>admin</p>
          </div>
          <img className='self-center' src={active} alt="" />
        </div>
      </div>
      <div></div>
    </header>
  )
}
