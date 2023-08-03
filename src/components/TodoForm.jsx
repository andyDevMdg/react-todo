import React , { useState }from 'react'

function TodoForm() {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        console.log(value)
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" 
        className='todoInput' 
        placeholder='What do you plan to do ?' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todoBtn'>Add</button>
    </form>
  )
}

export default TodoForm