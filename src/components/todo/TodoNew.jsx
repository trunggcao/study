import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("");

    const { addNewToDo } = props;

    // addNewToDo()
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    //
    const handleOnClick = () => {
        // console.log(">> Check input:", valueInput)
        // alert(valueInput)
        addNewToDo(valueInput)
        setValueInput("")
    }
    return (
        <div className='todo-input'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput} />
            <button className="btn btn-primary btn-new"
                onClick={() => handleOnClick()}>ADD</button>
            <div>My data input is: {valueInput}</div>
        </div>
    )
}

export default TodoNew