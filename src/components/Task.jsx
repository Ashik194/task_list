import React from 'react'

const Task = ({tasklists, setTaskList, taskEdit, setTaskEdit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskEdit.id){
            const date = new Date();
            const updatedTaskList = tasklists.map(tsk =>(
                tsk.id === taskEdit.id ? {id: taskEdit.id, name: taskEdit.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : tsk
            ))
            setTaskList(updatedTaskList);
            setTaskEdit({})
        }else{
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task_name.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...tasklists, newTask]);
            setTaskEdit({})
        }
    }
  return (
    <div className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task_name' autoComplete='off' placeholder='Add Task' value={taskEdit.name || ""} maxLength='30' onChange={(e) => setTaskEdit({...taskEdit, name: e.target.value})}/>
            {taskEdit.id ? <button type='submit'>Update</button> : <button type='submit'>Assign</button>}
        </form>
    </div>
  )
}

export default Task