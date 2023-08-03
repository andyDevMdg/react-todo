import React from 'react'

function TodoForm() {
  return (
    <form className='todoForm'>
        <input type="text" className='todoInput' placeholder='What do you plan to do ?'/>
        <button type='submit' className='todoBtn'>Add</button>
    </form>
  )
}

export default TodoForm