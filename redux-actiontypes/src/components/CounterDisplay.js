import React from 'react'
import {connect} from 'react-redux'

function CounterDisplay(props) {
    return (<div>{props.ctr}</div>)
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctrRed.counter
    }
}

export default connect(mapStateToProps)(CounterDisplay)