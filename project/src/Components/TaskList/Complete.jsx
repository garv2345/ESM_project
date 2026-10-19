import React from 'react'

const Complete = () => {
    return (
        <div className='w-60 rounded-2xl shrink-0 h-70 bg-green-400 p-4'>
            <div className='flex items-center justify-between'>
                <h4 className='bg-red-600 px-1 py-0.5'>{props.priority}</h4>
                <h2 className=' font-bold'> {props.date} </h2>
            </div>
            <h1 className='text-xl font-bold mt-10 '>{props.title}</h1>
            <p className='mt-4'> {props.desc}</p>
        </div>
    )
}

export default Complete