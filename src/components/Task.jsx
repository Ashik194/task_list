import React from 'react'

const Task = () => {
  return (
    <div className='addTask'>
        <form >
            <input type="text" name='task' autoComplete='off' placeholder='Add Task' maxLength='30'/>
            <button type='submit'>Assign</button>
        </form>
    </div>
  )
}

export default Task