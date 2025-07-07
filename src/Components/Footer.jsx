import React from 'react'

const Footer = () => {
  return (
    <div className='navbar border-slate-200 fixed border-2 flex gap-8'>
        <button className='btn border-t-2 border-b-0 border-l-0 border-r-0 border-green-800 bg-green-200 ml-6'>All Orders</button>
        <button >Pending</button>
        <button >Reviewed</button>
        <button >Arrived</button>
        <button className='text-2xl' >+</button>
    </div>
  )
}

export default Footer