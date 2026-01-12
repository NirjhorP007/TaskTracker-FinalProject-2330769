function Footer({ tasks }) {
  const completed = tasks.filter(t => t.completed).length

  return (
    <div>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completed}</p>
    </div>
  )
}

export default Footer