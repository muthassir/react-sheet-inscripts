import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-grey">
  <div className="flex-1">
    <a className="btn btn-ghost text-[14px]">Toolbar &gt;&gt; </a>
    <a >hide fields</a>
    <a className='ml-4'>sort</a>
    <a className='ml-4'>filter</a>
  </div>
  <div className="flex gap-2">
    {/* search */}
   <a >import</a>
   <a >export</a>
  <a >share</a>
    {/* alert */}
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-green-900 rounded cursor-pointer">
       <button className='  text-white p-2 cursor-pointer '>New Action</button>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar