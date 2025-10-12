import './components/todo/todo.css'
import LogoImg from './assets/react.svg'
import TodoNew from './components/todo/TodoNew'
import TodoBody from './components/todo/TodoBody'
const App = () => {

  return (
    <>
      <div className="todo-container">
        <div className="title"> Todo List</div>
        <TodoNew />
        <TodoBody />
        <div className='todo-logo'>
          <img src={LogoImg} className='logo' />
        </div>
      </div>

    </>
  )
}

export default App
