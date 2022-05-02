import React from 'react'

function Todo(props) {

  console.log('------------')
  console.log()
  return (
 
    <div>
  
      <li> {props.todoval.text}<button>edit</button>
        <button>Delete</button>
      </li>
    </div>
  )
}

export default Todo