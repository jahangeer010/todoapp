import React from 'react'
const Form =({setInputText,todos,setTodos,inputText})=>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
        console.log(e.target.value )
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}])
        
        console.log(...todos)
        // setInputText("");

    }

    return(
 
 <div>
 <form>
                <input value={inputText} onChange={inputTextHandler} type="text" />
                    <button onClick={submitTodoHandler} type="submit" >Add</button>
                <div>
                    <select name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            
</form>
        </div>
    )
}

export default Form