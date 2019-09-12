import React from 'react'
import {connect} from 'react-redux'

function TasksDisplay(props) {
    return (
        <div>
            {props.tasks.map(task => {
                return <div>{task}</div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksRed.tasks
    }
}

export default connect(mapStateToProps)(TasksDisplay)