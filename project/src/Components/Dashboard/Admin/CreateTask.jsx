import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-mist-900 opacity-95'>
        <form className='flex justify-evenly items-centre py-5'>
          <div className='flex flex-col gap-2'>
            <h3>Task Title</h3>
            <input type='text' placeholder='Make a UI Design' />
            <h3> Date</h3>
            <input type='date' />
            <h3>Assign To</h3>
            <input type='text' placeholder='employee name' />
            <h3>Category</h3>
            <input type='text' placeholder='Design,Development,etc.' />
          </div>
          <div className='flex flex-col gap-2'> 
          <h3>Description</h3>
          <textarea name="" id="" cols="30" rows="10" placeholder='Detailed Description of task (max.100 words)'></textarea>
          <button className='bg-emerald-600 text-2xl  font-bold rounded-2xl active:scale-95 hover:opacity-90'  type='submit'>Create Task</button>
          </div>

          
        </form>
      </div>
  )
}

export default CreateTask