import React, { useState } from 'react'
import uppIcon from '../images/uppIcon.png'
import bottomIcon from '../images/bottomIcon.png'

export default function Form(props) {
    const[formData,setFormData] = useState([
        {
            date:'',
            managerName: '',
            email:'',
            companyName:'',
            mobile:'',
            begginingBalance:'',
            streetAddress:'',
            city:'',
            province:'',
            country:'' ,       
            userName:'',
            password:''
        
        
    }
    ])
    function handleChange(event){
        setFormData(event.target.value)
        // console.log(formData)

    }
  return (
    <form className='p-3 flex flex-col gap-7'>
       <section className='border rounded section'>
            <div className='border p-3 flex justify-between'>
                <h4 className='capitalize'>basic information</h4>
                <img className='self-center' src={bottomIcon} alt="" />
            </div>
            <div className='flex flex-col px-4 pb-6 boxCont'>
                <div className='flex flex-col gap-5 mt-4 px-2'>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>date</label>
                        <input name='date' className='peer border py-1 px-2 rounded outline-0' type="date"  placeholder='24/3/2023' onChange={handleChange} value={formData.date} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>manager name</label>
                        <input name='managerName' className='peer border py-1 px-2 rounded outline-0' type="text"  placeholder='abdinasir osman geedi' onChange={handleChange} value={formData.managerName}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>email</label>
                        <input name='email' className='peer border py-1 px-2 rounded outline-0' type="email"  placeholder='info@suubbis.com' onChange={handleChange} value={formData.email}/>
                    </div> 
                </div>
                <div className='flex flex-col gap-5 mt-4 px-1'>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>company name</label>
                        <input name='companyName' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='suubbis LTD' onChange={handleChange} value={formData.companyName}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>mobile</label>
                        <input name='mobile' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='+252610778899' onChange={handleChange} value={formData.mobile}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>beggining balance</label>
                        <input name='begginingBalance' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='85632' onChange={handleChange} value={formData.begginingBalance}/>
                    </div>
                </div>

               
            </div>
           
        </section> 
       <section className='section border rounded'>
            <div className='border p-3 flex justify-between'>
                <h4 className='capitalize'>address</h4>
                <img className='self-center' src={bottomIcon} alt="" />
            </div>
            <div className='flex flex-col px-4 pb-6 boxCont'>
                <div className='flex flex-col gap-5 mt-4 px-2'>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>street address</label>
                        <input name='streetAddress' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='Makka Almukarama Avenue, Adani Tower 2, 505 Suitess' onChange={handleChange} value={formData.streetAddress}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>province/state</label>
                        <input name='province' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='banaadir' onChange={handleChange} value={formData.province}/>
                    </div>  
                </div>
                <div className='flex flex-col gap-5 mt-4 px-2'>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>city</label>
                        <input name='city' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='mogadishu' onChange={handleChange} value={formData.city}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='capitalize'>country</label>
                        <input name='country' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='somalia' onChange={handleChange} value={formData.country}/>
                    </div>

                </div>
            </div>
        </section> 
       <section className='section'>
            <div className='border p-3 flex justify-between'>
                <h4 className='capitalize'>access control</h4>
                <img className='self-center' src={bottomIcon} alt="" />
            </div>
            <div className='flex flex-col px-4 pb-6'>
                <div className='flex flex-col gap-5 mt-4 px-2 boxCont lastB'>
                        <div>
                           <h5>portal access status</h5>
                            <div className='flex gap-20 mt-3'>
                                <div className='flex gap-2'>
                                    <input type="checkbox" checked />
                                    <span className='capitalize'>allowed</span> 
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" />
                                    <span className='capitalize'>unAllowed</span> 
                                </div>
                            </div> 
                        </div>
                        
                       <div className='flex flex-col gap-4'>
                            <label className='capitalize'>username</label>
                            <input name='userName' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='info@suubbis.com' onChange={handleChange} value={formData.userName}/>
                        </div> 
                        <div className='boxCont align-baseline '>
                            <div className='flex flex-col gap-4'>
                                <label className='capitalize'>password</label>
                                <input name='password' className='peer border py-1 px-2 rounded outline-0' type="text" placeholder='password' onChange={handleChange} value={formData.password}/>
                            </div>
                            <div className='flex gap-1 self-end'>
                                <input className=' checked:bg-primary-red' type="checkbox" checked />
                                <span className='capitalize'>send password</span>
                            </div>
                        </div> 

                </div>
                
            </div>
        </section> 
      
    </form>
  )
}
