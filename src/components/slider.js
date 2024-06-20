import React from 'react'
import { Link } from 'react-router-dom'
import left from '../images/Left.png'
import right from '../images/Right.png'

export default function Slider() {
  return (
    <div className=''>
      <img src={left} alt="" />
      <div>
        <Link to='/'>1</Link>
        <Link>2</Link>
        <Link>3</Link>
        <Link>4</Link>
      </div>
      <img src={right} alt="" />
    </div>
  )
}
