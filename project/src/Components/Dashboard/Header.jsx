import React from 'react'

const Header = () => {
  return (
    <div className='px-8 py-4 flex items-center justify-between'> 
        <h1 className='text-2xl'>HELLO <br /> <span className='font-bold text-4xl'> GARV 👋</span></h1>
        <button className='bg-red-600 opacity-80 font-semibold text-md px-3 py-2 border-none active:scale-95'> LOG OUT </button>
    </div>
  )
}

export default Header