import React , { useState }from 'react'

function TodoForm() {
    const [value, setValue] = useState("")
  return (
    <form className='todoForm'>
        <input type="text" className='todoInput' placeholder='What do you plan to do ?'/>
        <button type='submit' className='todoBtn'>Add</button>
    </form>
  )
}

export default TodoForm