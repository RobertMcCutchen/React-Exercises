import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

function Tasks(props) {

    const [taskName, setTaskName] = useState('')

    const handleTextChange = (text) => {
        setTaskName(text)
    }

    const handleAddTask = () => {
        props.onAddTask(taskName)
    }

    return (
        <div>
            <input type="text" onChange={(e) => handleTextChange(e.target.value)}/>
            <button onClick={() => handleAddTask()}>Add Task</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (taskName) => dispatch(actionCreators.taskAdded(taskName))
    }
}

export default connect(null, mapDispatchToProps)(Tasks)