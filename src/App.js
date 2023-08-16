import './App.css';
import AllTasks from './components/AllTasks';
import Footer from './components/Footer';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  return (
    <>
      <Header />
      <Task />
      <AllTasks />
      <Footer />
    </>
  );
}

export default App;
