import React from 'react'

const AllTasks = ({tasklists, setTaskList, taskEdit, setTaskEdit}) => {

    const handleUpdate = (id) => {
        const selectUpdateTask = tasklists.find(task => task.id === id);
        setTaskEdit(selectUpdateTask)
    }
    const handleDelete = (id) => {
        const deleteTask = tasklists.filter(tsk => tsk.id !== id)
        setTaskList(deleteTask)
    }
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Tasks</span>
                <span className='count'>{tasklists.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
            {tasklists.map((data, idx) => (
                <li key={idx}>
                    <p>
                        <span className='name'>{data.name}</span>
                        <span className='time'>{data.time}</span>
                    </p>
                    <i className='bi bi-pencil-square' onClick={() => handleUpdate(data.id)}></i>
                    <i className='bi bi-trash' onClick={() =>handleDelete(data.id)}></i>
                </li>
            ))}
            
        </ul>
    </section>
  )
}

export default AllTasks