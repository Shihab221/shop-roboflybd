import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center min-h-screen'>
      <h2 className='text-3xl font-bold mb-4'>Sign In.</h2>
      <form className='flex flex-col w-[320px]'>

        <div className='space-y-2'>
            <p className='bg-gray-800 rounded-full text-center py-1'>Sign in with Google</p>
            <p className='bg-gray-800 rounded-full text-center py-1'>Sign in with Facebook</p>
        </div>


        <div className='flex flex-col my-4'> 
        <label className=' text-lg text-gray-300'>
            Username:
        </label>
        <input 
        placeholder='Enter username'
        className='bg-gray-800 px-2 py-1 text-center rounded-full'
        />

        <label className=' text-lg text-gray-300'>
            Password:
        </label>
        <input 
        placeholder='Enter password'
        className='bg-gray-800 px-2 py-1 text-center rounded-full mb-4'
        />

        
        <button className='bg-sky-400/20 py-1 rounded-full font-bold text-sky-500 border-2 border-sky-500'>
          Login
        </button>
        </div>

        <div className='m-0 p-0'>
        <p className='text-sm text-center pb-2'>Forgot your password?</p>
        <button className='bg-red-500 px-2 py-1 w-full rounded-full max-w-sm'>
            Create Account
        </button>
      </div>
      </form>

      
    </div>
  )
}

export default page
