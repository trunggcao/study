const TodoBody = (props) => {

    const { myName, myAge } = props;
    return (
        <div className="todo-body">
            <div>Learning React</div>
            <div>My name is: {name}</div>
            <div>Cua may em gai !!! kakkaka</div>
            <div>Github</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    )
}
export default TodoBody