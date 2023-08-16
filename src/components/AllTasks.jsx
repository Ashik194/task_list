import React from 'react'

const AllTasks = ({tasklists, setTaskList}) => {
    // const lists = [
    //     {id:1001, name:"Task A", time: "2:10:05 AM 20/15/2024"},
    //     {id:1001, name:"Task B", time: "1:10:05 AM 12/15/2028"},
    //     {id:1001, name:"Task C", time: "4:10:05 AM 10/15/2024"}
    // ]
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Tasks</span>
                <span className='count'>{tasklists.length}</span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
            {tasklists.map((data, idx) => (
                <li key={idx}>
                    <p>
                        <span className='name'>{data.name}</span>
                        <span className='time'>{data.time}</span>
                    </p>
                    <i className='bi bi-pencil-square'></i>
                    <i className='bi bi-trash'></i>
                </li>
            ))}
            
        </ul>
    </section>
  )
}

export default AllTasks