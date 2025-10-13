const TodoBody = (props) => {

    const { myName, myAge, todoList } = props;
    return (
        <div className="todo-body">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                )
            })}
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    )
}
export default TodoBody