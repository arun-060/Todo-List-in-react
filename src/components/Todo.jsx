import React, { useEffect, useRef, useState } from 'react'
import './css/Todo.css'
import TodoItems from './TodoItems';

let count = 0;

function Todo() {
    
    const [todo, setTodo] = useState([])
    const inputRef = useRef(null)

    const add = () => {
        setTodo([...todo, {no:count++, text:inputRef.current.value, display:""}])
        inputRef.current.value = ""
        localStorage.setItem("todos_count", count)
    }

    useEffect(()=>{
        setTodo(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("todos_count")
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todo)
            localStorage.setItem("todos", JSON.stringify(todo))
        }, 100)
    }, [todo])

  return (
    <div className='todo'>
        <div className="todo-header">To-Do list</div>
        <div className="todo-add">
            <input ref = {inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
            <div onClick = {()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todo.map((item, index)=>{
                return <TodoItems key={index} setTodo={setTodo} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    </div>
  )
}

export default Todo