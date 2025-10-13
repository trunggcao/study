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

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000),
      name: name

    }
    setTodoList([...todoList, newTodo])
  }

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
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
