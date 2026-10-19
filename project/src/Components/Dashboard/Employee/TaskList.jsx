import React from 'react'
import ListCard from './ListCard'

const TaskList = ({list}) => {
  return (

    <div id='taskList' className='flex gap-4  flex-nowrap  overflow-x-auto py-2 px-10 '>
      {list.map((l)=>{
        return <ListCard color={l.color} priority={l.priority} date={l.taskDate} title={l.taskTitle} desc={l.description}/>
      })}
      

    </div>
  )
}

export default TaskList