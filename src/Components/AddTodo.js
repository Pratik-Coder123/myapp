import React, { useState } from 'react'
import ShowTodo from './ShowTodo'

function AddTodo() {

    const [task, setTask] = useState("")
    const [addtask, setAddTask] = useState([])
    const changeText = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        setAddTask([...addtask, task])
        setTask("")
    }

    const deleteItem = (deleteID) => {
        const finalTask = addtask.filter((value, id) => {
            return id !== deleteID
        })
        setAddTask(finalTask)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <input type="text" className='form-control'placeholder='Add task' value={task} onChange={changeText} />
                    </div>
                    <div className="col-3">
                        <button className='btn btn-primary' onClick={addTask}>Add Task</button>
                    </div>
                </div>
            </div>

            {
                addtask.map((value, index) => {
                    return (
                        <>
                            <ShowTodo key={index} task={value} id={index} removeTask={deleteItem} />
                        </>
                    )
                })
            }

        </>
    )
}

export default AddTodo