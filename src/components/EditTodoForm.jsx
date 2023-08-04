import React , { useState }from 'react'

function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" 
        className='todoInput' 
        value={value} 
        placeholder='Update your task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todoBtn'>Update</button>
    </form>
  )
}

export default EditTodoForm