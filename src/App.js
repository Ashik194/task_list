import { useEffect, useState } from 'react';
import './App.css';
import AllTasks from './components/AllTasks';
import Footer from './components/Footer';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  const [tasklists, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklists")) || []);
  const [taskEdit, setTaskEdit] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklists",JSON.stringify(tasklists));
  },[tasklists])

  return (
    <>
      <Header />
      <Task 
      tasklists={tasklists} 
      setTaskList={setTaskList}
      taskEdit={taskEdit}
      setTaskEdit={setTaskEdit}
      />

      <AllTasks 
      tasklists={tasklists} 
      setTaskList={setTaskList}
      taskEdit={taskEdit}
      setTaskEdit={setTaskEdit}
      />
      <Footer  />
    </>
  );
}

export default App;
