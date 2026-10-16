import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, pass);
  }
  return (
    <div className='flex items-center justify-center w-full h-screen scroll overflow-hidden bg-mist-950 text-white  '>
      <div className='border-cyan-400 rounded-2xl border-1'>
        <h1 className='px-4 py-2 text-2xl font-bold'>LOG IN</h1>
        <form className='flex flex-col items-center justify-center gap-8  py-20 px-15'
          onSubmit={(e) => {
            submitHandler(e);
          }}>
          <input required className='border-2 rounded-full px-4 py-2 border-cyan-950' type='email' placeholder='Email' value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            } />
          <input required className='border-2 rounded-full px-4 py-2 border-cyan-950' type='password' placeholder='Password' value={pass}
            onChange={(e) => {
              setPass(e.target.value)
            }} />
          <button className=' bg-cyan-800  w-30 rounded-full active:scale-95 cursor-pointer ' type='submit'> Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login