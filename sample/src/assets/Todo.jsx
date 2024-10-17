import React from 'react'
import './Todo.css'


export default function Todo() {
  return (
    <div className='container'>
      <h1>TODO APP</h1>
      <form className='form-group'>
        <input type="text"  placeholder='Enter Your Todo'/>
        <button>ADD</button>
      </form>
      <div>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
      </div>
    </div>
  )
}
