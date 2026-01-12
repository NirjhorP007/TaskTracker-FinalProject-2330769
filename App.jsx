import { useState } from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <Footer tasks={tasks} />
    </div>
  )
}

export default App