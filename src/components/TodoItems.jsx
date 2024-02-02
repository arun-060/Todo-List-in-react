import React from 'react'
import './css/TodoItems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'

function TodoItems({no, display, text, setTodo}) {

  const deleteTodo = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((todo)=>todo.no!==no)
    setTodo(data)
  }

  const toggle = (no)=> {
    let data = JSON.parse(localStorage.getItem("todos"))
    for(let i=0; i<data.length; i++){
      if (data[i].no===no) {

        if (data[i].display==="") {
          data[i].display = "line-through"
        }
        else {
          data[i].display = ""
        }
        break

      }
    }
    setTodo(data)
  }

  return (
    <div className="todoitems">
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display === ""?<img src={not_tick} alt=""/>:<img src={tick} alt=""/>}
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-crossicon' onClick={()=>{deleteTodo(no)}} src={cross} alt=""  />
    </div>
  )
}

export default TodoItems