import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[editId,setEditID]=useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos([...todos, {list:todo,id : Date.now(),status:false}]);
    console.log(todos);
    setTodo("");
  };

  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  });
const onDelete =(id) =>{
  setTodos(todos.filter((to)=>to.id!==id))
}
const onComplete =(id)=>{
  let complete=todos.map((list)=>{
    if (list.id === id){
      return({...list , status : !list.status })
    }
    return list
  })
  setTodos(complete)
}

const onEdit = (id) =>{
 const editTodo= todos.find((to) => to.id ===id )
 setTodo(editTodo.list)
 setEditID(editTodo.id)
}

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          ref={inputRef}
          placeholder="Enter Your Todo"
          className="form-control"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={addTodo}>{editId ? 'Edit':'ADD'}</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((to) => (
            <li className="list-items">
              <div className="list-item" id={to.status ? 'list-1':''}>{to.list}</div>
              <span>
                <IoCheckmarkDone
                  className="list-icons"
                  id="complete"
                  title="Complete"
                  onClick={()=>onComplete(to.id)}
                />
                <FaEdit className="list-icons" id="edit" title="Edit"  onClick={()=> onEdit(to.id)} />
                <MdDelete className="list-icons" id="delete" title="Delete" onClick={()=>onDelete(to.id)}/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
