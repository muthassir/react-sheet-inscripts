import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { MdOutlineAltRoute } from "react-icons/md";



const Thirdnav = () => {
  return (
  <div className='border-b-slate-400 flex justify-between items-center'>
       <div className='bg-slate-100 w-2xl p-1 pl-6 ml-8 flex items-center'>
        <button className='btn rounded'><IoLinkOutline style={{color: 'skyblue'}} size={20} />Q3 Financial overview</button>
        <SlRefresh style={{marginLeft: '8px', color: 'orange', fontWeight: 'bold'}} />
       </div>
       <div className='h-full'>
        <button className='bg-green-400 btn rounded'><MdOutlineAltRoute style={{transform: 'rotate(180deg)'}}/>ABC ...</button>
        <button className='bg-violet-400 btn rounded w-2xs'><MdOutlineAltRoute style={{transform: 'rotate(180deg)'}}/>Answer a question ...</button>
        <button className='bg-orange-300 btn rounded'><MdOutlineAltRoute style={{transform: 'rotate(180deg)'}}/>Extract ...</button>
        <button className='bg-slate-300 btn rounded mr-4 w-20 text-2xl'>+</button>
       </div>
  </div>
  )
}

export default Thirdnav