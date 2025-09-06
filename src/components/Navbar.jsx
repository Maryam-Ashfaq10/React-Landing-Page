import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold'>NextTech</h1>
      <ul className='flex items-center'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>CONTACT</li>

      </ul>
    </div>
  )
}

export default Navbar
