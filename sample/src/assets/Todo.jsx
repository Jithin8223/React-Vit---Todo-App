import React from 'react'
import './Todo.css' 
import { useState } from 'react'


export default function Todo() {
  const [todo, setTodo]=useState('')
  return (
    <div className='container'>
      <h1>TODO APP</h1>
      <form className='form-group'>
        <input type="text" value={todo} placeholder='Enter Your Todo' className='form-control' onChange={(event)=> setInput(event.target.value)}/>
        <button>ADD</button>
      </form>
      <div className='list'>
        <ul>
            <li className='form-control'>First</li>
            <li className='form-control'>Second</li>
            <li className='form-control'>Third</li>
        </ul>
      </div>
    </div>
  )
}
