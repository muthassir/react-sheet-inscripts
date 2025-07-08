import React from 'react'

const Footer = () => {
  return (
    <div className='navbar border-slate-200 fixed border-2 flex gap-8'>
        <button  onClick={()=>console.log('clicked all orders')}  className='btn border-t-2 border-b-0 border-l-0 border-r-0 border-green-800 bg-green-200 ml-6'>All Orders</button>
        <button onClick={()=>console.log('clicked pending')} className='cursor-pointer'>Pending</button>
        <button  onClick={()=>console.log('clicked reviewd')}  className='cursor-pointer'>Reviewed</button>
        <button  onClick={()=>console.log('clicked arrived')}  className='cursor-pointer'>Arrived</button>
        <button onClick={()=>console.log('clicked new')}  className='text-2xl cursor-pointer' >+</button>
    </div>
  )
}

export default Footer