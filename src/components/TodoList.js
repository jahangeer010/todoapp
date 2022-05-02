import React from 'react'
import Todo from "../components/Todo"
const TodoList=(oooo)=>{
  // console.log(todos)
  const todo = oooo.todos
  return(<>
  <div>
   {todo.map((e)=>{console.log(e.text)})}


   {todo.map((e)=>{return(
   
   <Todo todoval={e}/>
   
   
   )})}
    
  </div>
  
  
  </>)
}

export default TodoList