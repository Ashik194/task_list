import React from 'react'

const Task = ({tasklists, setTaskList}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        console.log(newTask)
    }
  return (
    <div className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' autoComplete='off' placeholder='Add Task' maxLength='30'/>
            <button type='submit'>Assign</button>
        </form>
    </div>
  )
}

export default Task