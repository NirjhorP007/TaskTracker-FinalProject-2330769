function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem