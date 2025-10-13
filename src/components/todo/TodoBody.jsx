const TodoBody = (props) => {

    const { myName, deleteToDo, todoList } = props;
    const onClickDelete = (value) => {
        alert(`You want to delete this record`)
        deleteToDo(value)
    }
    return (
        <div className="todo-body">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button type="button" className="btn btn-danger"
                            onClick={() => onClickDelete(item.id)}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}
export default TodoBody