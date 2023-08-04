import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './todo.css';

function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className='todo'>
      <p onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div className='taskBtnContainer'>
      <FontAwesomeIcon icon={faPenToSquare} 
      onClick={() => editTodo(task.id)}
      className='taskBtn'/>
      <FontAwesomeIcon icon={faTrash} 
      onClick={() => deleteTodo(task.id)}
      className='taskBtn'/>
      </div>
    </div>
  )
}

export default Todo