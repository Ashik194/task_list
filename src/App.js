import { useState } from 'react';
import './App.css';
import AllTasks from './components/AllTasks';
import Footer from './components/Footer';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  const [tasklists, setTaskList] = useState([
    {id:1001, name:"Task A", time: "2:10:05 AM 20/15/2024"},
        {id:1001, name:"Task B", time: "1:10:05 AM 12/15/2028"},
        {id:1001, name:"Task C", time: "4:10:05 AM 10/15/2024"}
  ]);
  return (
    <>
      <Header />
      <Task />
      <AllTasks tasklists={tasklists} setTaskList={setTaskList} />
      <Footer tasklists={tasklists} setTaskList={setTaskList} />
    </>
  );
}

export default App;
