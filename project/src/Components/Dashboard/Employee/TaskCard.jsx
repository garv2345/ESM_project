import React from 'react'

const TaskCard = () => {
    return (
        <div className='flex flex-nowrap w-full  gap-5 justify-center py-6 px-10'>
            <div className='bg-cyan-400 rounded-2xl flex justify-between flex-col px-4 py-6 text-shadow-white h-50 w-90' >
                <h1 className='text-6xl font-extrabold'>0</h1>
                <h2 className='text-4xl font-bold'>New Task</h2>
            </div>
            <div className='bg-green-400 rounded-2xl flex justify-between flex-col px-4 py-6 text-shadow-white h-50 w-90' >
                <h1 className='text-6xl font-extrabold'>0</h1>
                <h2 className='text-4xl font-bold'>Completed</h2>
            </div>
            <div className='bg-yellow-400 rounded-2xl flex justify-between flex-col px-4 py-6 text-shadow-white h-50 w-90' >
                <h1 className='text-6xl font-extrabold'>0</h1>
                <h2 className='text-4xl font-bold'>Accept Task</h2>
            </div>
            <div className='bg-red-400 rounded-2xl flex justify-between flex-col px-4 py-6 text-shadow-white h-50 w-90' >
                <h1 className='text-6xl font-extrabold'>0</h1>
                <h2 className='text-4xl font-bold'>Failed Task</h2>
            </div>
        </div>
    )
}

export default TaskCard