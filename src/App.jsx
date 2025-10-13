import './components/todo/todo.css'
import LogoImg from './assets/react.svg'
import TodoNew from './components/todo/TodoNew'
import TodoBody from './components/todo/TodoBody'
import { useState } from 'react'
const App = () => {

  const myName = "Trung dep trai";
  const myAge = 21;

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Cua may em ghe dit bu." }
  ])

  const addNewToDo = () => {
    alert("Adu a Trung dep trai")
  }


  return (
    <>
      <div className="todo-container">
        <div className="title"> Todo List</div>
        <TodoNew
          addNewToDo={addNewToDo}
        />
        <TodoBody
          myName={myName}
          myAge={myAge}
          todoList={todoList}
        />
        <div className='todo-logo'>
          <img src={LogoImg} className='logo' />
        </div>
      </div>

    </>
  )
}

export default App
