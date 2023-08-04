import React , { useState }from 'react'

function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='todoEditForm' onSubmit={handleSubmit}>
        <input type="text" 
        className='todoInput' 
        value={value} 
        placeholder='Edit your task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todoBtnEdit'>Edit</button>
    </form>
  )
}

export default EditTodoForm