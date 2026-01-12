import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    onAdd(text)
    setText('')
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default TaskInput