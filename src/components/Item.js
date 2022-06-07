import React, { useState } from 'react'
import '../App.css'

const Item = ({ item, id, setList, list }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleDelete = id => {
    list.splice(id, 1)
    setList([...list])
  }

  return (
    <div>
      <h3
        onClick={() => setIsChecked(!isChecked)}
        className={isChecked ? 'completed' : null}
      >
        {task.task_name}
      </h3>
      <h5>{task.title}</h5>
      <h3 onClick={() => handleDelete(id)}>X</h3>
    </div>
  )
}

export default Item
