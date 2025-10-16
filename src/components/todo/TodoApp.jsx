import LogoImg from '../../assets/react.svg'
import TodoNew from './TodoNew'
import TodoBody from './TodoBody'
import { useState } from 'react'

const TodoApp = () => {
    const myName = "Trung dep trai";
    const myAge = 21;

    const [todoList, setTodoList] = useState([

    ])

    const addNewToDo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000),
            name: name

        }
        setTodoList([...todoList, newTodo])
    }

    const deleteToDo = (value) => {
        const result = todoList.filter(item => item.id !== value)
        setTodoList(result)
    }


    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="title"> Todo List</div>
            <TodoNew
                addNewToDo={addNewToDo}
            />
            {todoList.length > 0 ?
                <TodoBody
                    myName={myName}
                    myAge={myAge}
                    todoList={todoList}
                    deleteToDo={deleteToDo}
                />

                :
                <div className='todo-logo'>
                    <img src={LogoImg} className='logo' />
                </div>
            }
        </div>
    )
}

export default TodoApp