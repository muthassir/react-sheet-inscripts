import React from 'react'

const Thirdnav = () => {
  return (
  <div className='border-b-slate-400 flex justify-between items-center'>
       <div className='bg-slate-400 w-2xl p-1 pl-6 ml-8'>
        <button className='btn rounded'>Q3 Financial overview</button>
       </div>
       <div className='h-full'>
        <button className='bg-green-400 btn rounded'>ABC ...</button>
        <button className='bg-violet-400 btn rounded'>Answer a question ...</button>
        <button className='bg-orange-300 btn rounded'>Extract ...</button>
        <button className='bg-slate-300 btn rounded'>+</button>
       </div>
  </div>
  )
}

export default Thirdnav