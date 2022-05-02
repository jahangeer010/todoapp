import React ,{useState} from 'react'
import  "./App.css"
import TodoList from './components/TodoList'
import Form from './components/Form'
function App() {
const [inputText,setInputText]=useState("");
const [todos,setTodos]=useState([]);

  return (
    < >
    <div className='App'>
    <h1>TOdo List</h1>
    
    <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
    <TodoList todos={todos} setTodos={setTodos} inputText={inputText}/>
    
    </div>
    
    </>
  )
}

export default App